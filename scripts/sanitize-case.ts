import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {
  type AssetManifest,
  type Inventory,
  inventorySchema,
  readAssetManifest,
  writeAssetManifest,
} from './lib/assetManifest'

const SUPPORTED_SLUG = 'card-avatar'
const INVENTORY_PATH = path.join('manifest', 'remotionlab-showcase.json')
const REQUIRED_FILES = [
  'package.json',
  'remotion.config.ts',
  'remotionhub.asset.json',
  'remotionhub.asset.draft.json',
  'README.md',
  'LICENSE',
  'source.raw.tsx',
  'src/CardAvatar.tsx',
  'src/Root.tsx',
  'src/index.ts',
]
const PLACEHOLDER_PATTERN =
  /___|\b(?:TODO|FIXME|PLACEHOLDER|TBD)\b|replace\s+me/i
const PLACEHOLDER_CHECK_FILES = [
  'remotionhub.asset.json',
  'remotionhub.asset.draft.json',
  'README.md',
  'source.raw.tsx',
  'src/CardAvatar.tsx',
  'src/Root.tsx',
  'src/index.ts',
]

type SanitizeOptions = {
  cwd?: string
  slug?: string
  now?: () => string
}

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

function assertSupportedSlug(slug: string) {
  if (slug !== SUPPORTED_SLUG) {
    throw new Error(
      'Only card-avatar sanitization is supported in the first migration slice.',
    )
  }
}

async function readInventory(pathname: string) {
  const raw = await fs.readFile(pathname, 'utf8')
  return inventorySchema.parse(JSON.parse(raw))
}

async function writeInventory(pathname: string, inventory: Inventory) {
  const parsed = inventorySchema.parse(inventory)
  await fs.writeFile(pathname, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}

async function assertFileExists(pathname: string) {
  try {
    await fs.access(pathname)
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      throw new Error(`Required file is missing: ${pathname}`)
    }

    throw error
  }
}

async function assertNoPlaceholders(assetDir: string) {
  for (const relativePath of PLACEHOLDER_CHECK_FILES) {
    const pathname = path.join(assetDir, relativePath)
    const content = await fs.readFile(pathname, 'utf8')
    if (PLACEHOLDER_PATTERN.test(content)) {
      throw new Error(`Found unresolved placeholder in ${pathname}.`)
    }
  }
}

function withSanitizedStatus(
  manifest: AssetManifest,
  updatedAt: string,
): AssetManifest {
  if (manifest.migration.status === 'blocked') {
    return manifest
  }

  return {
    ...manifest,
    migration: {
      ...manifest.migration,
      status: 'sanitized',
      updatedAt,
    },
  }
}

function withSanitizedInventory(
  inventory: Inventory,
  slug: string,
  updatedAt: string,
) {
  return inventorySchema.parse({
    cases: inventory.cases.map((entry) => {
      if (entry.slug !== slug || entry.status === 'blocked') {
        return entry
      }

      return {
        ...entry,
        status: 'sanitized',
        updatedAt,
      }
    }),
  })
}

export async function runSanitization(options: SanitizeOptions = {}) {
  const cwd = options.cwd ?? process.cwd()
  const slug = options.slug ?? readArg('slug') ?? SUPPORTED_SLUG
  assertSupportedSlug(slug)

  const assetDir = path.join(cwd, 'remotion', slug)
  const manifestPath = path.join(assetDir, 'remotionhub.asset.json')
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const manifest = await readAssetManifest(manifestPath)
  const updatedAt = options.now?.() ?? new Date().toISOString()

  if (manifest.slug !== slug) {
    throw new Error(`Manifest slug ${manifest.slug} does not match ${slug}.`)
  }

  await assertFileExists(manifest.migration.sourceFile)
  await Promise.all(
    REQUIRED_FILES.map((relativePath) =>
      assertFileExists(path.join(assetDir, relativePath)),
    ),
  )
  await assertNoPlaceholders(assetDir)

  const nextManifest = withSanitizedStatus(manifest, updatedAt)
  if (nextManifest !== manifest) {
    await writeAssetManifest(manifestPath, nextManifest)
  }

  const inventory = await readInventory(inventoryPath)
  const nextInventory = withSanitizedInventory(inventory, slug, updatedAt)
  if (JSON.stringify(nextInventory) !== JSON.stringify(inventory)) {
    await writeInventory(inventoryPath, nextInventory)
  }

  return { slug, status: nextManifest.migration.status }
}

async function main() {
  const result = await runSanitization()
  console.log(`Sanitized ${result.slug}: ${result.status}.`)
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
