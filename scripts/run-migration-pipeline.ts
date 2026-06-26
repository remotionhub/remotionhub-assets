import { execFileSync } from 'node:child_process'

const slugs = [
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
]

async function runPipeline(slug: string) {
  console.log(`\n==================================================`)
  console.log(`Processing slug: ${slug}`)
  console.log(`==================================================`)

  try {
    // 1. Scaffold
    console.log(`Running scaffold-batch.ts...`)
    execFileSync('npx', ['tsx', 'scripts/scaffold-batch.ts', slug], {
      stdio: 'inherit',
    })

    // 2. Upload/Mirror Media
    console.log(`Running upload-media.ts...`)
    execFileSync('npx', ['tsx', 'scripts/upload-media.ts', `--slug=${slug}`], {
      stdio: 'inherit',
    })

    // 3. Generate README
    console.log(`Running generate-readme.ts...`)
    execFileSync(
      'npx',
      ['tsx', 'scripts/generate-readme.ts', `--slug=${slug}`],
      {
        stdio: 'inherit',
      },
    )

    // 4. Sanitize
    console.log(`Running sanitize-case.ts...`)
    execFileSync('npx', ['tsx', 'scripts/sanitize-case.ts', `--slug=${slug}`], {
      stdio: 'inherit',
    })

    // 5. Validate
    console.log(`Running validate-case.ts...`)
    execFileSync('npx', ['tsx', 'scripts/validate-case.ts', `--slug=${slug}`], {
      stdio: 'inherit',
    })

    console.log(`Successfully completed migration for ${slug}`)
    return true
  } catch (error) {
    console.error(`Failed to process ${slug}:`, error)
    return false
  }
}

async function main() {
  const targetSlug = process.argv[2]
  const list = targetSlug ? [targetSlug] : slugs

  let successCount = 0
  const failedSlugs: string[] = []

  for (let i = 0; i < list.length; i++) {
    const slug = list[i]
    console.log(`Progress: [${i + 1}/${list.length}]`)
    const success = await runPipeline(slug)
    if (success) {
      successCount++
    } else {
      failedSlugs.push(slug)
    }
  }

  console.log(`\n==================================================`)
  console.log(`Migration Pipeline finished!`)
  console.log(
    `Total: ${list.length}, Success: ${successCount}, Failed: ${failedSlugs.length}`,
  )
  if (failedSlugs.length > 0) {
    console.log(`Failed slugs:`, failedSlugs)
  }
  console.log(`==================================================`)

  if (failedSlugs.length > 0) {
    process.exit(1)
  }
}

main().catch(console.error)
