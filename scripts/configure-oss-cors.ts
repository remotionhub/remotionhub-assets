import process from 'node:process'
import { createRawOssClientFromEnv } from './lib/media'

const CORS_RULES = [
  {
    allowedOrigin: ['https://remotionhub.ai', 'http://localhost:3000'],
    allowedMethod: ['GET', 'HEAD'],
    allowedHeader: ['Range', 'Origin'],
    exposeHeader: [
      'Content-Length',
      'Content-Type',
      'Content-Range',
      'Accept-Ranges',
    ],
    maxAgeSeconds: 86400,
  },
]

async function main() {
  const raw = createRawOssClientFromEnv()
  if (!raw) {
    console.error(
      'Missing OSS env vars. Set OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_BUCKET, OSS_REGION.',
    )
    process.exit(1)
  }

  const { client, bucket } = raw

  console.log(`Configuring CORS on bucket: ${bucket}`)
  await client.putBucketCORS(bucket, CORS_RULES)
  console.log('CORS rules applied.')

  const result = await client.getBucketCORS(bucket)
  console.log('Current CORS configuration:')
  console.log(JSON.stringify(result.rules, null, 2))
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
