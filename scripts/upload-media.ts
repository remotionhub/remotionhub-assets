import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {
  type AssetManifest,
  type Inventory,
  inventorySchema,
  readDraftAssetManifest,
  writeAssetManifest,
} from './lib/assetManifest'
import {
  buildObjectKey,
  createS3ClientFromEnv,
  downloadMedia,
  isSourceSiteMediaUrl,
  sha256,
  uploadMediaObject,
} from './lib/media'

const INVENTORY_PATH = path.join('manifest', 'remotionlab-showcase.json')

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

function filenameFor(url: string) {
  return path.basename(new URL(url).pathname)
}

function contentTypeFor(filename: string) {
  if (filename.endsWith('.mp4')) {
    return 'video/mp4'
  }
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
    return 'image/jpeg'
  }
  if (filename.endsWith('.png')) {
    return 'image/png'
  }

  return 'application/octet-stream'
}

async function readInventory(pathname: string) {
  const raw = await fs.readFile(pathname, 'utf8')
  return inventorySchema.parse(JSON.parse(raw))
}

async function writeInventory(pathname: string, value: unknown) {
  await fs.writeFile(pathname, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function mirrorOne(args: {
  slug: string
  url: string
  publicBaseUrl: string
  dryRun: boolean
}) {
  if (!isSourceSiteMediaUrl(args.url)) {
    throw new Error(`Unsupported source media URL: ${args.url}`)
  }

  const body = await downloadMedia(args.url)
  const hash = sha256(body)
  const filename = filenameFor(args.url)
  const key = buildObjectKey(args.slug, filename, hash)
  const targetUrl = `${args.publicBaseUrl.replace(/\/$/, '')}/${key}`
  const client = createS3ClientFromEnv()
  const bucket = process.env.ASSETS_R2_BUCKET

  if (!args.dryRun) {
    if (!client || !bucket) {
      throw new Error(
        'R2 credentials and ASSETS_R2_BUCKET are required for real uploads.',
      )
    }

    await uploadMediaObject({
      client,
      bucket,
      key,
      body,
      contentType: contentTypeFor(filename),
    })
  }

  return { sourceUrl: args.url, targetUrl, hash, byteSize: body.byteLength }
}

export async function runMediaMirror(options?: {
  cwd?: string
  slug?: string
  dryRun?: boolean
  now?: () => string
}) {
  const cwd = options?.cwd ?? process.cwd()
  const slug = options?.slug ?? readArg('slug') ?? 'card-avatar'
  const dryRun = options?.dryRun ?? process.argv.includes('--dry-run')
  const publicBaseUrl =
    process.env.ASSETS_PUBLIC_BASE_URL ?? 'https://assets.remotionhub.ai'
  const draftPath = path.join(
    cwd,
    'remotion',
    slug,
    'remotionhub.asset.draft.json',
  )
  const finalPath = path.join(cwd, 'remotion', slug, 'remotionhub.asset.json')
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const raw = await readDraftAssetManifest(draftPath)
  const updatedAt = options?.now?.() ?? new Date().toISOString()

  const preview = await mirrorOne({
    slug,
    url: raw.originalPreviewUrl,
    publicBaseUrl,
    dryRun,
  })
  const thumbnail = await mirrorOne({
    slug,
    url: raw.originalThumbnailUrl,
    publicBaseUrl,
    dryRun,
  })
  const migrationStatus: AssetManifest['migration']['status'] = dryRun
    ? 'extracted'
    : 'media-mirrored'

  const nextManifest: AssetManifest = {
    ...raw,
    previewUrl: preview.targetUrl,
    thumbnailUrl: thumbnail.targetUrl,
    migration: {
      ...raw.migration,
      status: migrationStatus,
      updatedAt,
    },
  }

  await writeAssetManifest(finalPath, nextManifest)

  if (!dryRun) {
    const inventory = await readInventory(inventoryPath)
    const nextInventory: Inventory = {
      cases: inventory.cases.map((entry) =>
        entry.slug === slug
          ? {
              ...entry,
              status: migrationStatus,
              updatedAt,
            }
          : entry,
      ),
    }

    await writeInventory(inventoryPath, nextInventory)
  }

  return { slug, preview, thumbnail, dryRun, finalPath }
}

async function main() {
  const result = await runMediaMirror()
  console.log(JSON.stringify(result, null, 2))
}

if (
  process.argv[1] &&
  import.meta.url === new URL(process.argv[1], 'file:').href
) {
  main().catch((error: unknown) => {
    console.error(error)
    process.exit(1)
  })
}
