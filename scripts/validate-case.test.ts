import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { runValidation } from './validate-case'

const createdDirs: string[] = []

async function makeTempDir() {
  const tempDir = await fs.mkdtemp(
    path.join(os.tmpdir(), 'validate-case-test-'),
  )
  createdDirs.push(tempDir)
  return tempDir
}

async function writeWorkspace(
  tempDir: string,
  options: {
    status?: 'sanitized' | 'blocked'
    blockedReason?: string
  } = {},
) {
  const assetDir = path.join(tempDir, 'remotion', 'card-avatar')
  const manifestDir = path.join(tempDir, 'manifest')
  await fs.mkdir(assetDir, { recursive: true })
  await fs.mkdir(manifestDir, { recursive: true })

  const status = options.status ?? 'sanitized'
  const blockedReason = options.blockedReason
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
    prompt: 'Customize the card avatar.',
    propsSchema: [],
    extraDependencies: [],
    migration: {
      status,
      sourceFile: '/tmp/remotionlab/card-avatar.md',
      updatedAt: '2026-06-20T07:12:52.250Z',
      ...(blockedReason ? { blockedReason } : undefined),
    },
  }

  await fs.writeFile(
    path.join(assetDir, 'remotionhub.asset.json'),
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  )
  await fs.writeFile(
    path.join(assetDir, 'README.md'),
    '# Card Avatar\n\n## Props\n\n## Agent Prompt\n',
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
            sourceFile: '/tmp/remotionlab/card-avatar.md',
            assetPath: 'remotion/card-avatar',
            updatedAt: '2026-06-20T07:12:52.250Z',
            ...(blockedReason ? { blockedReason } : undefined),
          },
        ],
      },
      null,
      2,
    )}\n`,
    'utf8',
  )
}

async function readFile(pathname: string) {
  return fs.readFile(pathname, 'utf8')
}

async function readJson(pathname: string) {
  return JSON.parse(await readFile(pathname))
}

afterEach(async () => {
  await Promise.all(
    createdDirs
      .splice(0, createdDirs.length)
      .map((tempDir) => fs.rm(tempDir, { recursive: true, force: true })),
  )
})

describe('runValidation', () => {
  it('keeps manifest-only validation read-only', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)
    const manifestPath = path.join(
      tempDir,
      'remotion',
      'card-avatar',
      'remotionhub.asset.json',
    )
    const inventoryPath = path.join(
      tempDir,
      'manifest',
      'remotionlab-showcase.json',
    )
    const manifestBefore = await readFile(manifestPath)
    const inventoryBefore = await readFile(inventoryPath)
    const runCommand = vi.fn()

    await runValidation({
      cwd: tempDir,
      slug: 'card-avatar',
      manifestOnly: true,
      runCommand,
      now: () => '2026-06-20T12:34:56.000Z',
    })

    expect(runCommand).not.toHaveBeenCalled()
    expect(await readFile(manifestPath)).toBe(manifestBefore)
    expect(await readFile(inventoryPath)).toBe(inventoryBefore)
  })

  it('does not promote externally blocked media to validated', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir, {
      status: 'blocked',
      blockedReason: 'Media upload credentials are not configured.',
    })

    await runValidation({
      cwd: tempDir,
      slug: 'card-avatar',
      manifestOnly: false,
      runCommand: vi.fn(),
      now: () => '2026-06-20T12:34:56.000Z',
    })

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.migration).toEqual({
      status: 'blocked',
      sourceFile: '/tmp/remotionlab/card-avatar.md',
      updatedAt: '2026-06-20T07:12:52.250Z',
      blockedReason: 'Media upload credentials are not configured.',
    })

    const inventory = await readJson(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
    )
    expect(inventory.cases[0].status).toBe('blocked')
  })
})
