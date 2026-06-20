import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { runSanitization } from './sanitize-case'

const createdDirs: string[] = []

async function makeTempDir() {
  const tempDir = await fs.mkdtemp(
    path.join(os.tmpdir(), 'sanitize-case-test-'),
  )
  createdDirs.push(tempDir)
  return tempDir
}

async function writeWorkspace(
  tempDir: string,
  options: {
    manifestPrompt?: string
    status?: 'media-mirrored' | 'blocked'
    blockedReason?: string
  } = {},
) {
  const assetDir = path.join(tempDir, 'remotion', 'card-avatar')
  const srcDir = path.join(assetDir, 'src')
  const manifestDir = path.join(tempDir, 'manifest')
  await fs.mkdir(srcDir, { recursive: true })
  await fs.mkdir(manifestDir, { recursive: true })
  const sourceFile = path.join(tempDir, 'source', 'card-avatar.md')
  await fs.mkdir(path.dirname(sourceFile), { recursive: true })
  await fs.writeFile(sourceFile, '# Card Avatar source\n', 'utf8')

  const status = options.status ?? 'media-mirrored'
  const migration = {
    status,
    sourceFile,
    updatedAt: '2026-06-20T07:12:52.250Z',
    ...(options.blockedReason
      ? { blockedReason: options.blockedReason }
      : undefined),
  }
  const manifest = {
    slug: 'card-avatar',
    displayName: 'Card Avatar',
    runtime: 'remotion',
    sourceUrl: 'https://remotionlab.com/showcase/card-avatar',
    originalPreviewUrl:
      'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
    originalThumbnailUrl:
      'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/thumb.jpg',
    previewUrl:
      'https://assets.remotionhub.ai/showcase/card-avatar/preview.mp4',
    thumbnailUrl:
      'https://assets.remotionhub.ai/showcase/card-avatar/thumb.jpg',
    entryPoint: 'src/CardAvatar.tsx',
    compositionId: 'CardAvatar',
    durationFrames: 120,
    fps: 30,
    width: 1920,
    height: 1080,
    aspectRatios: ['16:9'],
    license: 'MIT',
    prompt:
      options.manifestPrompt ??
      'Customize the card avatar name, title, colors, and animation stiffness.',
    propsSchema: [
      {
        name: 'name',
        type: 'string',
        defaultValue: 'Jane Smith',
        description: 'Primary display name.',
      },
    ],
    extraDependencies: [],
    migration,
  }

  await fs.writeFile(
    path.join(assetDir, 'remotionhub.asset.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  )
  await fs.writeFile(
    path.join(assetDir, 'remotionhub.asset.draft.json'),
    `${JSON.stringify(
      {
        ...manifest,
        previewUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
        thumbnailUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/thumb.jpg',
        migration: {
          status: 'extracted',
          sourceFile,
          updatedAt: '2026-06-20T07:12:52.250Z',
        },
      },
      null,
      2,
    )}\n`,
    'utf8',
  )
  await fs.writeFile(
    path.join(assetDir, 'README.md'),
    '# Card Avatar\n\n## Props\n\n## Agent Prompt\n\nCustomize the card avatar.\n',
    'utf8',
  )
  await fs.writeFile(path.join(assetDir, 'LICENSE'), 'MIT\n', 'utf8')
  await fs.writeFile(
    path.join(assetDir, 'package.json'),
    '{"name":"card-avatar"}\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(assetDir, 'remotion.config.ts'),
    'export default {}\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(assetDir, 'source.raw.tsx'),
    'export const CardAvatar = () => null\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(srcDir, 'CardAvatar.tsx'),
    'export const CardAvatar = () => null\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(srcDir, 'Root.tsx'),
    'export const RemotionRoot = () => null\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(srcDir, 'index.ts'),
    'export { CardAvatar } from "./CardAvatar"\n',
    'utf8',
  )
  await fs.writeFile(
    path.join(manifestDir, 'remotionlab-showcase.json'),
    `${JSON.stringify(
      {
        cases: [
          {
            slug: 'card-avatar',
            status,
            sourceFile,
            assetPath: 'remotion/card-avatar',
            updatedAt: '2026-06-20T07:12:52.250Z',
            ...(options.blockedReason
              ? { blockedReason: options.blockedReason }
              : undefined),
          },
        ],
      },
      null,
      2,
    )}\n`,
    'utf8',
  )
}

async function readJson(pathname: string) {
  return JSON.parse(await fs.readFile(pathname, 'utf8'))
}

afterEach(async () => {
  await Promise.all(
    createdDirs
      .splice(0, createdDirs.length)
      .map((tempDir) => fs.rm(tempDir, { recursive: true, force: true })),
  )
})

describe('runSanitization', () => {
  it('rejects unresolved placeholders before marking the asset sanitized', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir, { manifestPrompt: 'Replace ___ later.' })

    await expect(
      runSanitization({
        cwd: tempDir,
        slug: 'card-avatar',
      }),
    ).rejects.toThrow(/unresolved placeholder/i)

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.migration.status).toBe('media-mirrored')
  })

  it('marks card-avatar sanitized after required files and content pass checks', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)

    await runSanitization({
      cwd: tempDir,
      slug: 'card-avatar',
      now: () => '2026-06-20T12:34:56.000Z',
    })

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.migration.status).toBe('sanitized')
    expect(manifest.migration.updatedAt).toBe('2026-06-20T12:34:56.000Z')

    const inventory = await readJson(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
    )
    expect(inventory.cases[0].status).toBe('sanitized')
  })

  it('preserves blocked status when external media availability is pending', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir, {
      status: 'blocked',
      blockedReason: 'Media upload credentials are not configured.',
    })

    await runSanitization({
      cwd: tempDir,
      slug: 'card-avatar',
      now: () => '2026-06-20T12:34:56.000Z',
    })

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.migration).toEqual({
      status: 'blocked',
      sourceFile: path.join(tempDir, 'source', 'card-avatar.md'),
      updatedAt: '2026-06-20T07:12:52.250Z',
      blockedReason: 'Media upload credentials are not configured.',
    })
  })
})
