import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {
  type AssetManifest,
  type Inventory,
  inventorySchema,
  readAssetManifest,
  readDraftAssetManifest,
  writeAssetManifest,
} from './lib/assetManifest'
import {
  buildObjectKey,
  createUploadTargetFromEnv,
  downloadMedia,
  isSourceSiteMediaUrl,
  type MediaUploadTarget,
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

async function readExistingAssetManifest(pathname: string) {
  try {
    return await readAssetManifest(pathname)
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return null
    }

    throw error
  }
}

async function loadLocalEnv(cwd: string) {
  const envPath = path.join(cwd, '.env.local')

  try {
    const raw = await fs.readFile(envPath, 'utf8')
    for (const line of raw.split('\n')) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) {
        continue
      }

      const separator = trimmed.indexOf('=')
      if (separator === -1) {
        continue
      }

      const key = trimmed.slice(0, separator).trim()
      const value = trimmed
        .slice(separator + 1)
        .trim()
        .replace(/^["']|["']$/g, '')
      process.env[key] ??= value
    }
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
      throw error
    }
  }
}

function resolvePublicBaseUrl(dryRun: boolean) {
  const configured =
    process.env.OSS_PUBLIC_BASE_URL?.trim() ??
    process.env.ASSETS_PUBLIC_BASE_URL?.trim()

  if (configured) {
    return configured
  }

  if (dryRun) {
    return 'https://assets.remotionhub.ai'
  }

  throw new Error(
    'OSS_PUBLIC_BASE_URL or ASSETS_PUBLIC_BASE_URL is required for real uploads and media-mirrored status.',
  )
}

function resolveUploadTarget(dryRun: boolean) {
  if (dryRun) {
    return null
  }

  const target = createUploadTargetFromEnv()
  if (!target) {
    throw new Error(
      'OSS credentials (OSS_ACCESS_KEY_ID, OSS_ACCESS_KEY_SECRET, OSS_BUCKET, OSS_REGION) or R2 credentials are required for real uploads.',
    )
  }

  return target
}

async function mirrorOne(args: {
  slug: string
  url: string
  publicBaseUrl: string
  dryRun: boolean
  uploadTarget: MediaUploadTarget | null
}) {
  if (!isSourceSiteMediaUrl(args.url)) {
    throw new Error(`Unsupported source media URL: ${args.url}`)
  }

  const body = await downloadMedia(args.url)
  const hash = sha256(body)
  const filename = filenameFor(args.url)
  const key = buildObjectKey(args.slug, filename, hash)
  const targetUrl = `${args.publicBaseUrl.replace(/\/$/, '')}/${key}`

  if (args.uploadTarget) {
    await uploadMediaObject({
      target: args.uploadTarget,
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
  await loadLocalEnv(cwd)

  const slug = options?.slug ?? readArg('slug') ?? 'card-avatar'
  const dryRun = options?.dryRun ?? process.argv.includes('--dry-run')
  const publicBaseUrl = resolvePublicBaseUrl(dryRun)
  const uploadTarget = resolveUploadTarget(dryRun)
  const draftPath = path.join(
    cwd,
    'remotion',
    slug,
    'remotionhub.asset.draft.json',
  )
  const finalPath = path.join(cwd, 'remotion', slug, 'remotionhub.asset.json')
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const raw = await readDraftAssetManifest(draftPath)
  const existing = await readExistingAssetManifest(finalPath)
  const baseManifest = existing ?? raw
  const updatedAt = options?.now?.() ?? new Date().toISOString()

  const preview = await mirrorOne({
    slug,
    url: raw.originalPreviewUrl,
    publicBaseUrl,
    dryRun,
    uploadTarget,
  })
  const thumbnail = await mirrorOne({
    slug,
    url: raw.originalThumbnailUrl,
    publicBaseUrl,
    dryRun,
    uploadTarget,
  })
  const migrationStatus: AssetManifest['migration']['status'] = dryRun
    ? 'extracted'
    : 'media-mirrored'

  const nextManifest: AssetManifest = {
    ...baseManifest,
    previewUrl: preview.targetUrl,
    thumbnailUrl: thumbnail.targetUrl,
    migration: {
      sourceFile: baseManifest.migration.sourceFile,
      status: migrationStatus,
      updatedAt,
    },
  }

  if (!dryRun) {
    await writeAssetManifest(finalPath, nextManifest)
  }

  if (!dryRun) {
    const inventory = await readInventory(inventoryPath)
    const nextInventory: Inventory = {
      cases: inventory.cases.map((entry) =>
        entry.slug === slug
          ? {
              slug: entry.slug,
              status: migrationStatus,
              sourceFile: entry.sourceFile,
              assetPath: entry.assetPath,
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
