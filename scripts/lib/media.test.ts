import { describe, expect, it } from 'vitest'
import {
  buildObjectKey,
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
