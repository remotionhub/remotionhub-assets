import crypto from 'node:crypto'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const SOURCE_SITE_MEDIA_HOST = 'pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev'

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

export async function uploadMediaObject(args: {
  client: S3Client
  bucket: string
  key: string
  body: Buffer
  contentType: string
}) {
  await args.client.send(
    new PutObjectCommand({
      Bucket: args.bucket,
      Key: args.key,
      Body: args.body,
      ContentType: args.contentType,
    }),
  )
}
