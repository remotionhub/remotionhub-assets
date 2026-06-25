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
  buildRuntimeObjectKey,
  createUploadTargetFromEnv,
  downloadMedia,
  isSourceSiteMediaUrl,
  type MediaUploadTarget,
  objectExists,
  sha256,
  uploadMediaObject,
} from './lib/media'
import {
  generateRuntimeAssetsModule,
  parseStaticFileCalls,
  type RuntimeAssetEntry,
} from './lib/runtimeAssets'

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
  if (filename.endsWith('.mp3')) {
    return 'audio/mpeg'
  }
  if (filename.endsWith('.wav')) {
    return 'audio/wav'
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
    const exists = await objectExists(args.uploadTarget, key)
    if (exists) {
      console.log(`Object already exists, skipping: ${key}`)
    } else {
      await uploadMediaObject({
        target: args.uploadTarget,
        key,
        body,
        contentType: contentTypeFor(filename),
      })
    }
  }

  return { sourceUrl: args.url, targetUrl, hash, byteSize: body.byteLength }
}

async function mirrorRuntimeMedia(args: {
  cwd: string
  slug: string
  publicBaseUrl: string
  dryRun: boolean
  uploadTarget: MediaUploadTarget | null
}): Promise<RuntimeAssetEntry[]> {
  const srcDir = path.join(args.cwd, 'remotion', args.slug, 'src')
  let sourceFiles: string[]
  try {
    const entries = await fs.readdir(srcDir, { withFileTypes: true })
    sourceFiles = entries
      .filter((e) => e.isFile() && /\.(tsx?|jsx?)$/.test(e.name))
      .map((e) => path.join(srcDir, e.name))
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return []
    }
    throw error
  }

  const seen = new Map<string, RuntimeAssetEntry>()
  const results: RuntimeAssetEntry[] = []

  for (const sourceFile of sourceFiles) {
    let calls: ReturnType<typeof parseStaticFileCalls>
    try {
      calls = parseStaticFileCalls(sourceFile)
    } catch (error: unknown) {
      if (
        error instanceof Error &&
        (error.message.includes('staticFile()') ||
          error.message.includes('Cannot read file'))
      ) {
        continue
      }
      throw error
    }

    for (const call of calls) {
      if (seen.has(call.arg)) {
        results.push(seen.get(call.arg)!)
        continue
      }

      const publicDir = path.resolve(args.cwd, 'public')
      const filePath = path.resolve(path.join(args.cwd, 'public', call.arg))
      if (
        !filePath.startsWith(publicDir + path.sep) &&
        filePath !== publicDir
      ) {
        throw new Error(
          `Path traversal detected: ${call.arg} resolves outside public/`,
        )
      }
      const body = await fs.readFile(filePath)
      const hash = sha256(body)
      const key = buildRuntimeObjectKey(hash)
      const contentType = contentTypeFor(path.basename(call.arg))
      const targetUrl = `${args.publicBaseUrl.replace(/\/$/, '')}/${key}`

      if (args.uploadTarget) {
        const exists = await objectExists(args.uploadTarget, key)
        if (exists) {
          console.log(`Object already exists, skipping: ${key}`)
        } else {
          await uploadMediaObject({
            target: args.uploadTarget,
            key,
            body,
            contentType,
          })
        }
      }

      const entry: RuntimeAssetEntry = {
        sourcePath: call.arg,
        url: targetUrl,
        sha256: hash,
        byteSize: body.byteLength,
        contentType,
      }
      seen.set(call.arg, entry)
      results.push(entry)
    }
  }

  return results
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

  let preview: { targetUrl: string }
  let thumbnail: { targetUrl: string }

  if (
    existing?.migration?.status === 'media-mirrored' &&
    existing?.previewUrl &&
    existing?.thumbnailUrl
  ) {
    console.log(`Media already mirrored for ${slug}, using cached URLs.`)
    preview = { targetUrl: existing.previewUrl }
    thumbnail = { targetUrl: existing.thumbnailUrl }
  } else {
    preview = await mirrorOne({
      slug,
      url: raw.originalPreviewUrl,
      publicBaseUrl,
      dryRun,
      uploadTarget,
    })
    thumbnail = await mirrorOne({
      slug,
      url: raw.originalThumbnailUrl,
      publicBaseUrl,
      dryRun,
      uploadTarget,
    })
  }
  const migrationStatus: AssetManifest['migration']['status'] = dryRun
    ? 'extracted'
    : 'media-mirrored'

  const runtimeEntries = await mirrorRuntimeMedia({
    cwd,
    slug,
    publicBaseUrl,
    dryRun,
    uploadTarget,
  })

  if (runtimeEntries.length > 0 && !dryRun) {
    const runtimeModulePath = path.join(
      cwd,
      'remotion',
      slug,
      'src',
      'runtime-assets.ts',
    )
    await fs.writeFile(
      runtimeModulePath,
      generateRuntimeAssetsModule(runtimeEntries),
      'utf8',
    )
  }

  const nextManifest: AssetManifest = {
    ...baseManifest,
    previewUrl: preview.targetUrl,
    thumbnailUrl: thumbnail.targetUrl,
    runtimeAssets:
      runtimeEntries.length > 0
        ? runtimeEntries
        : 'runtimeAssets' in baseManifest
          ? (baseManifest.runtimeAssets ?? [])
          : [],
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

  return { slug, preview, thumbnail, runtimeEntries, dryRun, finalPath }
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
