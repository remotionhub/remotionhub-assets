import { describe, expect, it } from 'vitest'
import {
  buildObjectKey,
  createUploadTargetFromEnv,
  downloadMedia,
  isSourceSiteMediaUrl,
  sha256,
} from './media'

describe('media helpers', () => {
  it('detects source-site media URLs', () => {
    expect(
      isSourceSiteMediaUrl(
        'https://pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev/showcase/card-avatar/preview.mp4',
      ),
    ).toBe(true)
  })

  it('builds stable object keys for mirrored assets', () => {
    expect(buildObjectKey('card-avatar', 'preview.mp4', 'abc123')).toBe(
      'showcase/card-avatar/abc123-preview.mp4',
    )
  })

  it('creates an OSS upload target from OSS environment variables', () => {
    const originalEnv = { ...process.env }

    try {
      process.env.OSS_ACCESS_KEY_ID = 'test-access-key-id'
      process.env.OSS_ACCESS_KEY_SECRET = 'test-access-key-secret'
      process.env.OSS_BUCKET = 'remotionhub'
      process.env.OSS_REGION = 'oss-cn-shenzhen'
      process.env.OSS_ENDPOINT = 'https://oss-cn-shenzhen.aliyuncs.com'

      expect(createUploadTargetFromEnv()?.provider).toBe('oss')
    } finally {
      process.env = originalEnv
    }
  })

  it('retries transient download failures before succeeding', async () => {
    const originalFetch = globalThis.fetch
    const body = Buffer.from('preview-media')
    let attempts = 0

    try {
      globalThis.fetch = (async () => {
        attempts += 1
        if (attempts === 1) {
          throw new TypeError('fetch failed')
        }

        return new Response(body, { status: 200 })
      }) as typeof fetch

      await expect(
        downloadMedia('https://example.com/preview.mp4'),
      ).resolves.toEqual(body)
      expect(attempts).toBe(2)
      expect(sha256(body)).toHaveLength(64)
    } finally {
      globalThis.fetch = originalFetch
    }
  })
})
