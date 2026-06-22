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
  'audio-bar-spectrum',
  'audio-circle-viz',
  'audio-pulse-ring',
  'audio-vinyl-record',
  'audio-waveform',
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
  'dataviz-area-chart',
  'dataviz-bar-chart',
  'dataviz-bubble',
  'dataviz-bullet',
  'dataviz-candlestick',
  'dataviz-comparison-split',
  'dataviz-counter-card',
  'dataviz-funnel',
  'dataviz-gantt',
  'dataviz-heatmap',
  'dataviz-horizontal-bar',
  'dataviz-line-draw',
  'dataviz-pie-donut',
  'dataviz-progress-ring',
  'dataviz-radar',
  'dataviz-sankey',
  'dataviz-scatter-plot',
  'dataviz-stacked-bar',
  'dataviz-treemap',
  'dataviz-waterfall',
  'intro-cinematic-bars',
  'intro-cinematic-text',
  'intro-countdown-3',
  'intro-geometric',
  'intro-logo-morph',
  'intro-minimal-fade',
  'intro-news-broadcast',
  'intro-particle-burst',
  'intro-split-screen',
  'intro-typewriter',
  'intro-vhs-retro',
  'logo-badge-unfold',
  'logo-block-build',
  'logo-brand-kit',
  'logo-emblem',
  'logo-glow-pulse',
  'logo-hologram',
  'logo-icon-reveal',
  'logo-line-draw',
  'logo-minimal-dot',
  'logo-negative-reveal',
  'logo-orbit-reveal',
  'logo-pin-drop',
  'logo-ring-focus',
  'logo-shield-crest',
  'logo-stamp-reveal',
  'logo-triangle-form',
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
  'outro-comment-cta',
  'outro-credits-roll',
  'outro-end-screen',
  'outro-playlist',
  'outro-social-links',
  'outro-sponsor',
  'outro-subscribe-cta',
  'social-app-store',
  'social-comment-wall',
  'social-facebook',
  'social-github',
  'social-ig-masonry',
  'social-ig-post',
  'social-linkedin',
  'social-notifications',
  'social-producthunt',
  'social-reddit',
  'social-reddit-feed',
  'social-stats-wall',
  'social-stories-row',
  'social-testimonial-wall',
  'social-tiktok',
  'social-trending',
  'social-twitter-feed',
  'social-twitter-quote',
  'social-youtube-feed',
  'social-yt-video',
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
  'transition-blinds',
  'transition-curtain',
  'transition-diagonal-wipe',
  'transition-diamond-reveal',
  'transition-fade-cross',
  'transition-film-burn',
  'transition-flash-white',
  'transition-ink-spread',
  'transition-morph-circle',
  'transition-page-flip',
  'transition-pixelate',
  'transition-slide-push',
  'transition-spin-zoom',
  'transition-split-doors',
  'transition-wipe-clock',
  'transition-zoom-out-in',
  'transition-zoom-through',
  'yt-acq-ret-ref',
  'yt-ai-not-understand',
  'yt-ai-reads-only',
  'yt-ai-report-doubt',
  'yt-ai-skill-network',
  'yt-ai-use-cases',
  'yt-ai-wrappers-dead',
  'yt-animation-suffice',
  'yt-arcade-beat-em-up',
  'yt-ask-ai-tip',
  'yt-audio-add-vocals',
  'yt-audio-complex-pop-question',
  'yt-audio-control',
  'yt-audio-fast-results',
  'yt-audio-lets-start',
  'yt-audio-prompt-skill',
  'yt-audio-rock-remix',
  'yt-audio-software-criteria',
  'yt-brand-value-stripped',
  'yt-bug-fix-loop',
  'yt-build-stability',
  'yt-build-trust-first',
  'yt-can-do-animation',
  'yt-char-animations',
  'yt-cloudflare-api-key',
  'yt-code-controls',
  'yt-connection-recap-outro',
  'yt-consistent-output',
  'yt-core-dist-card',
  'yt-core-flow',
  'yt-customize-own',
  'yt-deploy-cloudflare',
  'yt-dev-flow-intro',
  'yt-dev-flow-steps',
  'yt-distribution-first',
  'yt-distribution-hard',
  'yt-easy-channel-hard-dist',
  'yt-engine-abilities',
  'yt-engine-criteria',
  'yt-equity-design',
  'yt-exclusive-app',
  'yt-execute-validate',
  'yt-experiment-conclusion',
  'yt-extract-tool',
  'yt-far-stranger-pains',
  'yt-far-strangers',
  'yt-far-to-near',
  'yt-faster-higher-quality',
  'yt-first-deal-hard',
  'yt-first-version',
  'yt-focus-one-topic',
  'yt-four-ai-tools',
  'yt-from-scratch',
  'yt-game-mashup',
  'yt-generic-chatbot',
  'yt-generic-means-lacking',
  'yt-growth-24',
  'yt-idea-check',
  'yt-idea-feasibility',
  'yt-influencer-dms',
  'yt-inside-the-problem',
  'yt-iterate-two-days',
  'yt-like-subscribe-bell',
  'yt-line-phase-intro',
  'yt-magazine-layout',
  'yt-manual-first',
  'yt-mcp-chapter-card',
  'yt-mcp-pipeline',
  'yt-mid-ask-experts',
  'yt-mobile-patience',
  'yt-narrative-redesign',
  'yt-near-self-friends',
  'yt-no-3d-needed',
  'yt-not-about-analysis',
  'yt-not-just-effects',
  'yt-not-that-simple',
  'yt-page-scroll-metrics',
  'yt-pencil-intro',
  'yt-product-overflow',
  'yt-prompt-dev',
  'yt-prompt-spec',
  'yt-reach-pain-points',
  'yt-rejected-ideas',
  'yt-report-transform',
  'yt-scatter-shot',
  'yt-service-first',
  'yt-shadcn-prompt',
  'yt-shadcn-results',
  'yt-shortest-path',
  'yt-simple-ai-product',
  'yt-skill-showcase',
  'yt-solve-first-point',
  'yt-start-small',
  'yt-start-with-service',
  'yt-success-path',
  'yt-svg-cards',
  'yt-tailor-for-audience',
  'yt-tech-boosts-stability',
  'yt-think-distribution',
  'yt-three-dimensions',
  'yt-three-questions',
  'yt-too-many-coincidences',
  'yt-tool-selection',
  'yt-tool-showcase',
  'yt-trust-is-currency',
  'yt-trust-transfer',
  'yt-two-errors-detail',
  'yt-two-focus',
  'yt-two-lessons',
  'yt-user-iterate',
  'yt-version-2-card',
  'yt-version-3-card',
  'yt-zero-revenue',
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
