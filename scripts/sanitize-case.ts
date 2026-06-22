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

const SUPPORTED_SLUGS = new Set([
  'card-avatar',
  'card-elastic',
  'card-from-left',
  'card-from-right',
  'card-from-top',
  'card-glass',
  'card-outline',
  'card-scale',
  'card-split',
  'card-stagger',
  'card-top-left',
  'card-top-right',
  'card-two-tone',
  'card-typewriter',
  'card-wipe',
  'countdown-blast',
  'countdown-circle',
  'countdown-digital',
  'countdown-firework',
  'countdown-flip-clock',
  'lower-third-box-pop',
  'lower-third-callout',
  'lower-third-gradient-bar',
  'lower-third-line-expand',
  'lower-third-minimal',
  'lower-third-news',
  'lower-third-slide',
  'lower-third-social',
  'map-area-reveal',
  'map-path-trace',
  'map-pin-drop',
  'map-radar-scan',
  'map-route-progress',
  'subtitle-cinematic',
  'subtitle-dual-lang',
  'subtitle-fade',
  'subtitle-karaoke',
  'subtitle-slide',
  'title-3d-rotate',
  'title-blur-focus',
  'title-glitch-text',
  'title-gradient-wipe',
  'title-handwriting',
  'title-kinetic-bounce',
  'title-neon-glow',
  'title-scramble',
  'title-shimmer',
  'title-slot-reel',
  'title-split-reveal',
  'title-stagger-lines',
  'title-typewriter',
  'title-wave-text',
  'title-word-fade',
  'title-zoom-punch',
])
const INVENTORY_PATH = path.join('manifest', 'remotionlab-showcase.json')

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function getRequiredFiles(componentName: string) {
  return [
    'package.json',
    'remotion.config.ts',
    'remotionhub.asset.json',
    'remotionhub.asset.draft.json',
    'README.md',
    'LICENSE',
    'source.raw.tsx',
    `src/${componentName}.tsx`,
    'src/Root.tsx',
    'src/index.ts',
  ]
}

const PLACEHOLDER_PATTERN =
  /___|\b(?:TODO|FIXME|PLACEHOLDER|TBD)\b|replace\s+me/i

function getPlaceholderCheckFiles(componentName: string) {
  return [
    'remotionhub.asset.json',
    'README.md',
    `src/${componentName}.tsx`,
    'src/Root.tsx',
    'src/index.ts',
  ]
}

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
  if (!SUPPORTED_SLUGS.has(slug)) {
    throw new Error(`Slug ${slug} is not supported.`)
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

async function assertNoPlaceholders(assetDir: string, componentName: string) {
  for (const relativePath of getPlaceholderCheckFiles(componentName)) {
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
  const slug = options.slug ?? readArg('slug') ?? 'card-avatar'
  assertSupportedSlug(slug)

  const assetDir = path.join(cwd, 'remotion', slug)
  const manifestPath = path.join(assetDir, 'remotionhub.asset.json')
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const manifest = await readAssetManifest(manifestPath)
  const updatedAt = options.now?.() ?? new Date().toISOString()

  if (manifest.slug !== slug) {
    throw new Error(`Manifest slug ${manifest.slug} does not match ${slug}.`)
  }

  const componentName = toPascalCase(slug)

  await assertFileExists(manifest.migration.sourceFile)
  await Promise.all(
    getRequiredFiles(componentName).map((relativePath) =>
      assertFileExists(path.join(assetDir, relativePath)),
    ),
  )
  await assertNoPlaceholders(assetDir, componentName)

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
