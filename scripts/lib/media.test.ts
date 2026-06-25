import { describe, expect, it, vi } from 'vitest'
import {
  buildObjectKey,
  createUploadTargetFromEnv,
  downloadMedia,
  isSourceSiteMediaUrl,
  objectExists,
  type R2MediaClient,
  sha256,
  uploadMediaObject,
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

  it('uploads to OSS without object ACL by default', async () => {
    const put = vi.fn(async () => undefined)
    const head = vi.fn(async () => {
      throw new Error('not found')
    })

    await uploadMediaObject({
      target: {
        provider: 'oss',
        client: { put, head },
      },
      key: 'showcase/card-avatar/preview.mp4',
      body: Buffer.from('preview-media'),
      contentType: 'video/mp4',
    })

    expect(put).toHaveBeenCalledWith(
      'showcase/card-avatar/preview.mp4',
      Buffer.from('preview-media'),
      {
        mime: 'video/mp4',
        headers: {
          'Content-Type': 'video/mp4',
        },
      },
    )
  })

  it('sets OSS object ACL when explicitly configured', async () => {
    const originalEnv = { ...process.env }
    const put = vi.fn(async () => undefined)
    const head = vi.fn(async () => {
      throw new Error('not found')
    })

    try {
      process.env.OSS_OBJECT_ACL = 'public-read'

      await uploadMediaObject({
        target: {
          provider: 'oss',
          client: { put, head },
        },
        key: 'showcase/card-avatar/preview.mp4',
        body: Buffer.from('preview-media'),
        contentType: 'video/mp4',
      })

      expect(put).toHaveBeenCalledWith(
        'showcase/card-avatar/preview.mp4',
        Buffer.from('preview-media'),
        {
          mime: 'video/mp4',
          headers: {
            'Content-Type': 'video/mp4',
            'x-oss-object-acl': 'public-read',
          },
        },
      )
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

  it('returns true when OSS head succeeds', async () => {
    const head = vi.fn(async () => ({ status: 200 }))
    const target = { provider: 'oss' as const, client: { head, put: vi.fn() } }

    await expect(objectExists(target, 'runtime/sha256/abc')).resolves.toBe(true)
    expect(head).toHaveBeenCalledWith('runtime/sha256/abc')
  })

  it('returns false when OSS head returns 404', async () => {
    const head = vi.fn(async () => {
      throw Object.assign(new Error('Not Found'), { status: 404 })
    })
    const target = { provider: 'oss' as const, client: { head, put: vi.fn() } }

    await expect(objectExists(target, 'runtime/sha256/abc')).resolves.toBe(
      false,
    )
  })

  it('returns true when R2 HeadObject succeeds', async () => {
    const send = vi.fn(async () => ({ ContentLength: 1024 }))
    const target = {
      provider: 'r2' as const,
      client: { send } as unknown as R2MediaClient,
      bucket: 'assets',
    }

    await expect(objectExists(target, 'runtime/sha256/abc')).resolves.toBe(true)
  })

  it('returns false when R2 HeadObject throws NotFound', async () => {
    const send = vi.fn(async () => {
      throw Object.assign(new Error('NotFound'), { name: 'NotFound' })
    })
    const target = {
      provider: 'r2' as const,
      client: { send } as unknown as R2MediaClient,
      bucket: 'assets',
    }

    await expect(objectExists(target, 'runtime/sha256/abc')).resolves.toBe(
      false,
    )
  })
})
