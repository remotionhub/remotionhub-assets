import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { inventorySchema, type Inventory } from './lib/assetManifest'
import { parseRemotionLabMarkdown } from './lib/remotionlabMarkdown'

type DraftAssetManifest = {
  slug: string
  displayName: string
  runtime: 'remotion'
  sourceUrl: string
  originalPreviewUrl: string
  originalThumbnailUrl: string
  previewUrl: string
  thumbnailUrl: string
  entryPoint: string
  compositionId: string
  durationFrames: number
  fps: number
  width: number
  height: number
  aspectRatios: string[]
  license: string
  prompt: string
  propsSchema: []
  extraDependencies: string[]
  migration: {
    status: 'extracted'
    sourceFile: string
    updatedAt: string
  }
}

type ExtractionOptions = {
  cwd?: string
  slug?: string
  sourceFile?: string
  now?: () => string
}

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

function toDisplayName(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

function nowIso() {
  return new Date().toISOString()
}

function assertSupportedSlug(slug: string) {
  if (!SUPPORTED_SLUGS.has(slug)) {
    throw new Error(`Slug ${slug} is not supported.`)
  }
}

async function writeJson(pathname: string, value: unknown) {
  await fs.writeFile(pathname, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function readInventory(pathname: string) {
  try {
    const raw = await fs.readFile(pathname, 'utf8')
    return inventorySchema.parse(JSON.parse(raw))
  } catch (error: unknown) {
    if (error instanceof Error && 'code' in error && error.code === 'ENOENT') {
      return inventorySchema.parse({ cases: [] })
    }

    throw error
  }
}

function upsertInventoryCase(
  inventory: Inventory,
  nextCase: Inventory['cases'][number],
) {
  const cases = inventory.cases.filter((entry) => entry.slug !== nextCase.slug)
  cases.push(nextCase)
  cases.sort((left, right) => left.slug.localeCompare(right.slug))
  return inventorySchema.parse({ cases })
}

export async function runExtraction(options: ExtractionOptions = {}) {
  const slug = options.slug ?? readArg('slug') ?? 'card-avatar'
  assertSupportedSlug(slug)

  const cwd = options.cwd ?? process.cwd()
  const sourceFile =
    options.sourceFile ??
    readArg('source') ??
    `/tmp/remotionlab/案例/${slug}.md`
  const markdown = await fs.readFile(sourceFile, 'utf8')
  const parsed = parseRemotionLabMarkdown(markdown, sourceFile)
  assertSupportedSlug(parsed.slug)

  const assetPath = path.join('remotion', parsed.slug)
  const updatedAt = (options.now ?? nowIso)()
  const componentName = toPascalCase(parsed.slug)
  const displayName = toDisplayName(parsed.slug)

  const draftManifest: DraftAssetManifest = {
    slug: parsed.slug,
    displayName,
    runtime: 'remotion',
    sourceUrl: parsed.sourceUrl,
    originalPreviewUrl: parsed.previewUrl,
    originalThumbnailUrl: parsed.thumbnailUrl,
    previewUrl: parsed.previewUrl,
    thumbnailUrl: parsed.thumbnailUrl,
    entryPoint: `src/${componentName}.tsx`,
    compositionId: componentName,
    durationFrames: 120,
    fps: 30,
    width: 1920,
    height: 1080,
    aspectRatios: ['16:9'],
    license: 'MIT',
    prompt: parsed.prompt,
    propsSchema: [],
    extraDependencies: [],
    migration: {
      status: 'extracted',
      sourceFile,
      updatedAt,
    },
  }

  const assetDir = path.join(cwd, assetPath)
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const inventory = upsertInventoryCase(await readInventory(inventoryPath), {
    slug: parsed.slug,
    status: 'extracted',
    sourceFile,
    assetPath,
    updatedAt,
  })

  await fs.mkdir(assetDir, { recursive: true })
  await fs.mkdir(path.dirname(inventoryPath), { recursive: true })
  await writeJson(
    path.join(assetDir, 'remotionhub.asset.draft.json'),
    draftManifest,
  )
  await fs.writeFile(
    path.join(assetDir, 'source.raw.tsx'),
    `${parsed.code}\n`,
    'utf8',
  )
  await writeJson(inventoryPath, inventory)

  return {
    assetPath,
    inventory,
    slug: parsed.slug,
  }
}

async function main() {
  const result = await runExtraction()
  console.log(`Extracted ${result.slug} to ${result.assetPath}.`)
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
