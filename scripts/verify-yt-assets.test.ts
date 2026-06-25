import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { runVerification } from './verify-yt-assets'

const createdDirs: string[] = []

async function makeTempDir() {
  const tempDir = await fs.mkdtemp(
    path.join(os.tmpdir(), 'verify-yt-assets-test-'),
  )
  createdDirs.push(tempDir)
  return tempDir
}

async function createWorkspace(
  tempDir: string,
  options: {
    slug?: string
    durationFrames?: number
    rootDuration?: number
    componentDuration?: number
    staticFileCalls?: string[]
    runtimeAssets?: Array<{
      sourcePath: string
      url: string
      sha256: string
      byteSize: number
      contentType: string
    }>
    runtimeAssetsInFile?: Array<{
      sourcePath: string
      url: string
    }>
    hasRuntimeAssetsFile?: boolean
    skipManifest?: boolean
    skipRoot?: boolean
    skipComponent?: boolean
  } = {},
) {
  const slug = options.slug ?? 'yt-test-asset'
  const durationFrames = options.durationFrames ?? 120
  const rootDuration = options.rootDuration ?? durationFrames
  const componentDuration = options.componentDuration

  const assetDir = path.join(tempDir, 'remotion', slug)
  const srcDir = path.join(assetDir, 'src')
  await fs.mkdir(srcDir, { recursive: true })

  if (!options.skipManifest) {
    const manifest = {
      slug,
      displayName: 'Test Asset',
      runtime: 'remotion',
      sourceUrl: 'https://remotionlab.com/showcase/test',
      originalPreviewUrl:
        'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/test/preview.mp4',
      originalThumbnailUrl:
        'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/test/thumb.jpg',
      previewUrl: 'https://assets.remotionhub.ai/showcase/test/preview.mp4',
      thumbnailUrl: 'https://assets.remotionhub.ai/showcase/test/thumb.jpg',
      entryPoint: `src/${toPascalCase(slug)}.tsx`,
      compositionId: toPascalCase(slug),
      durationFrames,
      fps: 30,
      width: 1920,
      height: 1080,
      aspectRatios: ['16:9'],
      license: 'MIT',
      prompt: 'Test prompt.',
      propsSchema: [],
      extraDependencies: [],
      runtimeAssets: options.runtimeAssets ?? [],
      migration: {
        status: 'validated',
        sourceFile: '/tmp/test.md',
        updatedAt: '2026-06-23T12:00:00.000Z',
      },
    }

    await fs.writeFile(
      path.join(assetDir, 'remotionhub.asset.json'),
      `${JSON.stringify(manifest, null, 2)}\n`,
      'utf8',
    )
  }

  if (!options.skipRoot) {
    const rootContent = `import { Composition, registerRoot } from 'remotion'
import { ${toPascalCase(slug)} } from './${toPascalCase(slug)}'

export function RemotionRoot() {
  return (
    <Composition
      id="${toPascalCase(slug)}"
      component={${toPascalCase(slug)}}
      durationInFrames={${rootDuration}}
      fps={30}
      width={1920}
      height={1080}
    />
  )
}

registerRoot(RemotionRoot)
`
    await fs.writeFile(path.join(srcDir, 'Root.tsx'), rootContent, 'utf8')
  }

  if (!options.skipComponent) {
    const pascalName = toPascalCase(slug)
    let componentContent = `import React from 'react'
import { AbsoluteFill } from 'remotion'

${componentDuration !== undefined ? `export const ${pascalName.toUpperCase()}_DURATION_FRAMES = ${componentDuration};\n` : ''}
export const ${pascalName}: React.FC = () => {
  return <AbsoluteFill />
}
`
    if (options.staticFileCalls && options.staticFileCalls.length > 0) {
      componentContent = `import React from 'react'
import { AbsoluteFill, staticFile } from 'remotion'

const SFX = {
${options.staticFileCalls.map((arg) => `  test: staticFile("${arg}"),`).join('\n')}
}

${componentDuration !== undefined ? `export const ${pascalName.toUpperCase()}_DURATION_FRAMES = ${componentDuration};\n` : ''}
export const ${pascalName}: React.FC = () => {
  return <AbsoluteFill />
}
`
    }

    await fs.writeFile(
      path.join(srcDir, `${pascalName}.tsx`),
      componentContent,
      'utf8',
    )
  }

  if (options.hasRuntimeAssetsFile) {
    const assetsForFile =
      options.runtimeAssetsInFile ?? options.runtimeAssets ?? []
    const runtimeAssetsContent = `export const runtimeAssets = {
${assetsForFile.map((a) => `  '${a.sourcePath}': '${a.url}',`).join('\n')}
} as const
`
    await fs.writeFile(
      path.join(srcDir, 'runtime-assets.ts'),
      runtimeAssetsContent,
      'utf8',
    )
  }

  return { slug, assetDir }
}

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

afterEach(async () => {
  await Promise.all(
    createdDirs
      .splice(0, createdDirs.length)
      .map((tempDir) => fs.rm(tempDir, { recursive: true, force: true })),
  )
})

describe('runVerification', () => {
  it('passes when all assets are valid', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-test-asset']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-test-asset',
      durationFrames: 120,
      rootDuration: 120,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify(
        {
          name: '@remotionhub/assets',
          version: '0.0.0',
          lockfileVersion: 3,
          packages: {
            '': { name: '@remotionhub/assets', version: '0.0.0' },
            'node_modules/@remotionhub/yt-test-asset': {
              resolved: 'remotion/yt-test-asset',
            },
          },
        },
        null,
        2,
      ),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    expect(result.errors).toHaveLength(0)
    expect(result.totalSlugs).toBe(1)
  })

  it('detects missing directory for canonical slug', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-missing-dir']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const dirErrors = result.errors.filter(
      (e) => e.check === 'directory-exists',
    )
    expect(dirErrors).toHaveLength(1)
    expect(dirErrors[0]).toEqual({
      slug: 'yt-missing-dir',
      check: 'directory-exists',
      message: 'Missing directory: remotion/yt-missing-dir/',
    })
  })

  it('detects directory not in canonical list', async () => {
    const tempDir = await makeTempDir()
    const slugs: string[] = []

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, { slug: 'yt-extra-dir' })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    expect(result.errors).toHaveLength(1)
    expect(result.errors[0]).toEqual({
      slug: 'yt-extra-dir',
      check: 'reverse-mapping',
      message:
        'Directory remotion/yt-extra-dir/ has remotionhub.asset.json but slug is not in canonical list',
    })
  })

  it('detects duration mismatch between manifest and Root.tsx', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-dur-mismatch']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-dur-mismatch',
      durationFrames: 120,
      rootDuration: 240,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const durErrors = result.errors.filter(
      (e) => e.check === 'duration-manifest-root',
    )
    expect(durErrors).toHaveLength(1)
    expect(durErrors[0]).toEqual({
      slug: 'yt-dur-mismatch',
      check: 'duration-manifest-root',
      message: 'Duration mismatch: manifest=120, Root.tsx=240',
    })
  })

  it('detects duration mismatch between manifest and component', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-comp-dur-mismatch']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-comp-dur-mismatch',
      durationFrames: 120,
      rootDuration: 120,
      componentDuration: 240,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const compDurErrors = result.errors.filter(
      (e) => e.check === 'duration-manifest-component',
    )
    expect(compDurErrors).toHaveLength(1)
    expect(compDurErrors[0]).toEqual({
      slug: 'yt-comp-dur-mismatch',
      check: 'duration-manifest-component',
      message:
        'Duration mismatch: manifest=120, YtCompDurMismatch.tsx YTCOMPDURMISMATCH_DURATION_FRAMES=240',
    })
  })

  it('detects staticFile() calls in component source', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-static-file']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-static-file',
      durationFrames: 120,
      rootDuration: 120,
      staticFileCalls: ['audio/test.wav'],
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    expect(result.errors.length).toBeGreaterThanOrEqual(1)
    expect(result.errors.some((e) => e.check === 'no-staticFile')).toBe(true)
  })

  it('detects missing runtime-assets.ts when manifest has runtimeAssets', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-runtime-missing']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-runtime-missing',
      durationFrames: 120,
      rootDuration: 120,
      runtimeAssets: [
        {
          sourcePath: 'audio/test.wav',
          url: 'https://assets.remotionhub.ai/test/audio.wav',
          sha256: 'a'.repeat(64),
          byteSize: 1024,
          contentType: 'audio/wav',
        },
      ],
      hasRuntimeAssetsFile: false,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const runtimeErrors = result.errors.filter(
      (e) => e.check === 'runtime-assets-file',
    )
    expect(runtimeErrors).toHaveLength(1)
    expect(runtimeErrors[0]).toEqual({
      slug: 'yt-runtime-missing',
      check: 'runtime-assets-file',
      message: 'Manifest has runtimeAssets but missing src/runtime-assets.ts',
    })
  })

  it('detects missing runtime asset entry in runtime-assets.ts', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-runtime-entry']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-runtime-entry',
      durationFrames: 120,
      rootDuration: 120,
      runtimeAssets: [
        {
          sourcePath: 'audio/test.wav',
          url: 'https://assets.remotionhub.ai/test/audio.wav',
          sha256: 'a'.repeat(64),
          byteSize: 1024,
          contentType: 'audio/wav',
        },
        {
          sourcePath: 'audio/missing.wav',
          url: 'https://assets.remotionhub.ai/test/missing.wav',
          sha256: 'b'.repeat(64),
          byteSize: 2048,
          contentType: 'audio/wav',
        },
      ],
      runtimeAssetsInFile: [
        {
          sourcePath: 'audio/test.wav',
          url: 'https://assets.remotionhub.ai/test/audio.wav',
        },
      ],
      hasRuntimeAssetsFile: true,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const entryErrors = result.errors.filter(
      (e) => e.check === 'runtime-assets-entry',
    )
    expect(entryErrors).toHaveLength(1)
    expect(entryErrors[0]).toEqual({
      slug: 'yt-runtime-entry',
      check: 'runtime-assets-entry',
      message:
        'Runtime asset entry "audio/missing.wav" not found in src/runtime-assets.ts',
    })
  })

  it('detects missing lockfile entry for workspace', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-test-asset']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-test-asset',
      durationFrames: 120,
      rootDuration: 120,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify(
        {
          name: '@remotionhub/assets',
          version: '0.0.0',
          lockfileVersion: 3,
          packages: {
            '': { name: '@remotionhub/assets', version: '0.0.0' },
          },
        },
        null,
        2,
      ),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    expect(result.errors).toHaveLength(1)
    expect(result.errors[0]).toEqual({
      slug: 'yt-test-asset',
      check: 'lockfile-workspace',
      message:
        'Workspace "@remotionhub/yt-test-asset" not found in package-lock.json',
    })
  })

  it('skips remote checks by default', async () => {
    const tempDir = await makeTempDir()
    const slugs = ['yt-remote-skip']

    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'yt-animation-slugs.json'),
      JSON.stringify(slugs, null, 2),
      'utf8',
    )

    await createWorkspace(tempDir, {
      slug: 'yt-remote-skip',
      durationFrames: 120,
      rootDuration: 120,
      runtimeAssets: [
        {
          sourcePath: 'audio/test.wav',
          url: 'https://invalid-url-that-does-not-exist.example/audio.wav',
          sha256: 'a'.repeat(64),
          byteSize: 1024,
          contentType: 'audio/wav',
        },
      ],
      hasRuntimeAssetsFile: true,
    })

    await fs.writeFile(
      path.join(tempDir, 'package-lock.json'),
      JSON.stringify({ name: 'test', lockfileVersion: 3, packages: {} }),
      'utf8',
    )

    const result = await runVerification({ cwd: tempDir })
    const remoteErrors = result.errors.filter((e) =>
      e.check.startsWith('remote-asset'),
    )
    expect(remoteErrors).toHaveLength(0)
  })
})
