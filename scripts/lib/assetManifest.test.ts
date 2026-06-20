import { describe, expect, it } from 'vitest'
import { assetManifestSchema, inventorySchema } from './assetManifest'

const baseManifest = {
  slug: 'card-avatar',
  displayName: 'Card Avatar',
  runtime: 'remotion',
  sourceUrl: 'https://remotionlab.com/showcase/card-avatar',
  originalPreviewUrl:
    'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
  originalThumbnailUrl:
    'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/thumb.jpg',
  previewUrl: 'https://assets.remotionhub.ai/showcase/card-avatar/preview.mp4',
  thumbnailUrl: 'https://assets.remotionhub.ai/showcase/card-avatar/thumb.jpg',
  entryPoint: 'src/CardAvatar.tsx',
  compositionId: 'CardAvatar',
  durationFrames: 120,
  fps: 30,
  width: 1920,
  height: 1080,
  aspectRatios: ['16:9'],
  license: 'MIT',
  prompt: 'Add this Remotion component to my project.',
  propsSchema: [
    {
      name: 'name',
      type: 'string',
      defaultValue: 'Jane Smith',
      description: 'Primary display name.',
    },
  ],
  extraDependencies: [],
  migration: {
    status: 'published',
    sourceFile: '/tmp/remotionlab/案例/card-avatar.md',
    updatedAt: '2026-06-20T00:00:00.000Z',
  },
}

describe('asset manifest schema', () => {
  it('accepts the card-avatar manifest shape', () => {
    expect(assetManifestSchema.parse(baseManifest).slug).toBe('card-avatar')
  })

  it('accepts RemotionHub-controlled published media URLs', () => {
    const parsed = assetManifestSchema.parse({
      ...baseManifest,
      previewUrl:
        'https://assets.remotionhub.ai/showcase/card-avatar/preview.mp4',
      thumbnailUrl:
        'https://assets.remotionhub.ai/showcase/card-avatar/thumb.jpg',
    })

    expect(parsed.previewUrl).toBe(
      'https://assets.remotionhub.ai/showcase/card-avatar/preview.mp4',
    )
  })

  it('rejects third-party preview media URLs', () => {
    expect(() =>
      assetManifestSchema.parse({
        ...baseManifest,
        previewUrl: 'https://example.com/preview.mp4',
      }),
    ).toThrow(/RemotionHub-controlled/)
  })

  it('rejects non-canonical r2 preview media URLs', () => {
    expect(() =>
      assetManifestSchema.parse({
        ...baseManifest,
        previewUrl:
          'https://another-bucket.r2.dev/showcase/card-avatar/preview.mp4',
      }),
    ).toThrow(/RemotionHub-controlled/)
  })

  it('rejects third-party thumbnail media URLs', () => {
    expect(() =>
      assetManifestSchema.parse({
        ...baseManifest,
        thumbnailUrl: 'https://example.com/thumb.jpg',
      }),
    ).toThrow(/RemotionHub-controlled/)
  })

  it('tracks inventory status for every case', () => {
    const parsed = inventorySchema.parse({
      cases: [
        {
          slug: 'card-avatar',
          status: 'published',
          sourceFile: '/tmp/remotionlab/案例/card-avatar.md',
          assetPath: 'remotion/card-avatar',
          blockedReason: undefined,
          updatedAt: '2026-06-20T00:00:00.000Z',
        },
      ],
    })

    expect(parsed.cases).toHaveLength(1)
  })

  it('reuses the manifest slug rules for inventory cases', () => {
    expect(() =>
      inventorySchema.parse({
        cases: [
          {
            slug: 'Card Avatar',
            status: 'published',
            sourceFile: '/tmp/remotionlab/案例/card-avatar.md',
            assetPath: 'remotion/card-avatar',
            updatedAt: '2026-06-20T00:00:00.000Z',
          },
        ],
      }),
    ).toThrow()
  })
})
