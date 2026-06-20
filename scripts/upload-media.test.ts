import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const createdDirs: string[] = []
const originalEnv = { ...process.env }
type MockS3Client = { send: ReturnType<typeof vi.fn> }

const downloadMediaMock = vi.fn(async () => Buffer.from('mock-media'))
const uploadMediaObjectMock = vi.fn(async () => undefined)
const createS3ClientFromEnvMock = vi.fn<() => MockS3Client | null>(() => ({
  send: vi.fn(),
}))

vi.mock('./lib/media', async () => ({
  buildObjectKey: (slug: string, filename: string, hash: string) =>
    `showcase/${slug}/${hash.slice(0, 12)}-${filename}`,
  createS3ClientFromEnv: createS3ClientFromEnvMock,
  downloadMedia: downloadMediaMock,
  isSourceSiteMediaUrl: () => true,
  sha256: () => 'abc123abc123abc123abc123abc123abc123abc123abc123abc123abc123',
  uploadMediaObject: uploadMediaObjectMock,
}))

async function makeTempDir() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'upload-media-test-'))
  createdDirs.push(tempDir)
  return tempDir
}

async function writeWorkspace(tempDir: string) {
  const remotionDir = path.join(tempDir, 'remotion', 'card-avatar')
  const manifestDir = path.join(tempDir, 'manifest')
  await fs.mkdir(remotionDir, { recursive: true })
  await fs.mkdir(manifestDir, { recursive: true })

  await fs.writeFile(
    path.join(remotionDir, 'remotionhub.asset.draft.json'),
    `${JSON.stringify(
      {
        slug: 'card-avatar',
        displayName: 'Card Avatar',
        runtime: 'remotion',
        sourceUrl: 'https://remotionlab.com/showcase/card-avatar',
        originalPreviewUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
        originalThumbnailUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/thumb.jpg',
        previewUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
        thumbnailUrl:
          'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/thumb.jpg',
        entryPoint: 'src/CardAvatar.tsx',
        compositionId: 'CardAvatar',
        durationFrames: 120,
        fps: 30,
        width: 1920,
        height: 1080,
        aspectRatios: ['16:9'],
        license: 'MIT',
        prompt: 'Add this Remotion component to my project.',
        propsSchema: [],
        extraDependencies: [],
        migration: {
          status: 'extracted',
          sourceFile: '/tmp/remotionlab/案例/card-avatar.md',
          updatedAt: '2026-06-20T07:12:52.250Z',
        },
      },
      null,
      2,
    )}\n`,
    'utf8',
  )

  await fs.writeFile(
    path.join(manifestDir, 'remotionlab-showcase.json'),
    `${JSON.stringify(
      {
        cases: [
          {
            slug: 'card-avatar',
            status: 'extracted',
            sourceFile: '/tmp/remotionlab/案例/card-avatar.md',
            assetPath: 'remotion/card-avatar',
            updatedAt: '2026-06-20T07:12:52.250Z',
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

beforeEach(() => {
  vi.resetModules()
  vi.clearAllMocks()
  process.env = { ...originalEnv }
})

afterEach(async () => {
  process.env = { ...originalEnv }

  await Promise.all(
    createdDirs
      .splice(0, createdDirs.length)
      .map((tempDir) => fs.rm(tempDir, { recursive: true, force: true })),
  )
})

describe('runMediaMirror', () => {
  it('fails real uploads when ASSETS_PUBLIC_BASE_URL is missing', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)
    process.env.ASSETS_R2_BUCKET = 'assets-bucket'
    createS3ClientFromEnvMock.mockReturnValue({ send: vi.fn() })

    const { runMediaMirror } = await import('./upload-media')

    await expect(
      runMediaMirror({
        cwd: tempDir,
        slug: 'card-avatar',
        dryRun: false,
        now: () => '2026-06-20T12:34:56.000Z',
      }),
    ).rejects.toThrow(/ASSETS_PUBLIC_BASE_URL/)

    expect(downloadMediaMock).not.toHaveBeenCalled()
    expect(uploadMediaObjectMock).not.toHaveBeenCalled()
    await expect(
      fs.access(
        path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
      ),
    ).rejects.toThrow()

    const inventory = await readJson(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
    )
    expect(inventory.cases[0].status).toBe('extracted')
  })

  it('keeps inventory at extracted during dry-run and uses the safe default URL', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)
    delete process.env.ASSETS_PUBLIC_BASE_URL
    createS3ClientFromEnvMock.mockReturnValue(null)

    const { runMediaMirror } = await import('./upload-media')
    const result = await runMediaMirror({
      cwd: tempDir,
      slug: 'card-avatar',
      dryRun: true,
      now: () => '2026-06-20T12:34:56.000Z',
    })

    expect(result.dryRun).toBe(true)
    expect(uploadMediaObjectMock).not.toHaveBeenCalled()

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.previewUrl).toBe(
      'https://assets.remotionhub.ai/showcase/card-avatar/abc123abc123-preview.mp4',
    )
    expect(manifest.migration.status).toBe('extracted')

    const inventory = await readJson(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
    )
    expect(inventory.cases[0].status).toBe('extracted')
    expect(inventory.cases[0].updatedAt).toBe('2026-06-20T07:12:52.250Z')
  })

  it('fails real uploads when upload credentials are missing', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)
    process.env.ASSETS_PUBLIC_BASE_URL = 'https://assets.remotionhub.ai'
    delete process.env.ASSETS_R2_BUCKET
    createS3ClientFromEnvMock.mockReturnValue(null)

    const { runMediaMirror } = await import('./upload-media')

    await expect(
      runMediaMirror({
        cwd: tempDir,
        slug: 'card-avatar',
        dryRun: false,
      }),
    ).rejects.toThrow(/ASSETS_R2_BUCKET/)

    expect(downloadMediaMock).not.toHaveBeenCalled()
    expect(uploadMediaObjectMock).not.toHaveBeenCalled()
  })

  it('only advances to media-mirrored when public base URL and upload config are present', async () => {
    const tempDir = await makeTempDir()
    await writeWorkspace(tempDir)
    process.env.ASSETS_PUBLIC_BASE_URL = 'https://assets.remotionhub.ai'
    process.env.ASSETS_R2_BUCKET = 'assets-bucket'
    createS3ClientFromEnvMock.mockReturnValue({ send: vi.fn() })

    const { runMediaMirror } = await import('./upload-media')
    await runMediaMirror({
      cwd: tempDir,
      slug: 'card-avatar',
      dryRun: false,
      now: () => '2026-06-20T12:34:56.000Z',
    })

    expect(uploadMediaObjectMock).toHaveBeenCalledTimes(2)

    const manifest = await readJson(
      path.join(tempDir, 'remotion', 'card-avatar', 'remotionhub.asset.json'),
    )
    expect(manifest.previewUrl).toBe(
      'https://assets.remotionhub.ai/showcase/card-avatar/abc123abc123-preview.mp4',
    )
    expect(manifest.thumbnailUrl).toBe(
      'https://assets.remotionhub.ai/showcase/card-avatar/abc123abc123-thumb.jpg',
    )
    expect(manifest.migration.status).toBe('media-mirrored')

    const inventory = await readJson(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
    )
    expect(inventory.cases[0].status).toBe('media-mirrored')
    expect(inventory.cases[0].updatedAt).toBe('2026-06-20T12:34:56.000Z')
  })
})
