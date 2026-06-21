import crypto from 'node:crypto'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import OSS from 'ali-oss'

const SOURCE_SITE_MEDIA_HOST = 'pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev'

export type R2MediaClient = S3Client
export type OssMediaClient = {
  put: (
    key: string,
    body: Buffer,
    options?: { mime?: string; headers?: Record<string, string> },
  ) => Promise<unknown>
}

export type MediaUploadTarget =
  | {
      provider: 'r2'
      client: R2MediaClient
      bucket: string
    }
  | {
      provider: 'oss'
      client: OssMediaClient
    }

export function isSourceSiteMediaUrl(url: string) {
  return url.includes(SOURCE_SITE_MEDIA_HOST)
}

export function buildObjectKey(slug: string, filename: string, hash: string) {
  return `showcase/${slug}/${hash.slice(0, 12)}-${filename}`
}

export async function downloadMedia(url: string) {
  let lastError: unknown

  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Failed to download ${url}: ${response.status}`)
      }

      return Buffer.from(await response.arrayBuffer())
    } catch (error: unknown) {
      lastError = error
    }
  }

  throw lastError
}

export function sha256(buffer: Buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex')
}

export function createS3ClientFromEnv() {
  const accountId = process.env.ASSETS_R2_ACCOUNT_ID
  const accessKeyId = process.env.ASSETS_R2_ACCESS_KEY_ID
  const secretAccessKey = process.env.ASSETS_R2_SECRET_ACCESS_KEY

  if (!accountId || !accessKeyId || !secretAccessKey) {
    return null
  }

  return new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  })
}

export function createOssClientFromEnv(): OssMediaClient | null {
  const accessKeyId = process.env.OSS_ACCESS_KEY_ID
  const accessKeySecret = process.env.OSS_ACCESS_KEY_SECRET
  const bucket = process.env.OSS_BUCKET
  const region = process.env.OSS_REGION
  const endpoint = process.env.OSS_ENDPOINT

  if (!accessKeyId || !accessKeySecret || !bucket || !region) {
    return null
  }

  return new OSS({
    accessKeyId,
    accessKeySecret,
    bucket,
    region,
    endpoint,
    secure: true,
  }) as OssMediaClient
}

export function createUploadTargetFromEnv(): MediaUploadTarget | null {
  const ossClient = createOssClientFromEnv()
  if (ossClient) {
    return { provider: 'oss', client: ossClient }
  }

  const r2Client = createS3ClientFromEnv()
  const bucket = process.env.ASSETS_R2_BUCKET
  if (r2Client && bucket) {
    return { provider: 'r2', client: r2Client, bucket }
  }

  return null
}

export async function uploadMediaObject(args: {
  target: MediaUploadTarget
  key: string
  body: Buffer
  contentType: string
}) {
  if (args.target.provider === 'oss') {
    await args.target.client.put(args.key, args.body, {
      mime: args.contentType,
      headers: { 'Content-Type': args.contentType },
    })
    return
  }

  await args.target.client.send(
    new PutObjectCommand({
      Bucket: args.target.bucket,
      Key: args.key,
      Body: args.body,
      ContentType: args.contentType,
    }),
  )
}
