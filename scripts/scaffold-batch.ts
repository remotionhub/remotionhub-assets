import fs from 'node:fs/promises'
import path from 'node:path'
import { execSync } from 'node:child_process'

const slugs = [
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
]

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function replaceHyphenatedVariables(code: string): string {
  let result = ''

  // State stack
  const stateStack: string[] = ['code']
  // brace depth stack for template-expr or jsx expressions
  const braceDepthStack: number[] = [0]
  // track if the current jsx-tag is an end tag
  const jsxTagIsEndStack: boolean[] = []

  let i = 0
  while (i < code.length) {
    const char = code[i]
    const nextChar = code[i + 1]
    const curState = stateStack[stateStack.length - 1]

    if (curState === 'single-line-comment') {
      result += char
      if (char === '\n') {
        stateStack.pop()
      }
      i++
      continue
    }

    if (curState === 'multi-line-comment') {
      result += char
      if (char === '*' && nextChar === '/') {
        result += '/'
        stateStack.pop()
        i += 2
      } else {
        i++
      }
      continue
    }

    if (curState === 'single-quote') {
      result += char
      if (char === "'" && code[i - 1] !== '\\') {
        stateStack.pop()
      }
      i++
      continue
    }

    if (curState === 'double-quote') {
      result += char
      if (char === '"' && code[i - 1] !== '\\') {
        stateStack.pop()
      }
      i++
      continue
    }

    if (curState === 'template-literal') {
      if (char === '`' && code[i - 1] !== '\\') {
        result += char
        stateStack.pop()
        i++
      } else if (char === '$' && nextChar === '{') {
        result += '${'
        stateStack.push('template-expr')
        braceDepthStack.push(0)
        i += 2
      } else {
        result += char
        i++
      }
      continue
    }

    // Now we are in one of: 'code', 'template-expr', 'jsx-tag', 'jsx-text'
    if (curState === 'jsx-text') {
      if (char === '{') {
        result += char
        stateStack.push('code')
        braceDepthStack.push(1)
        i++
      } else if (
        char === '<' &&
        (nextChar === '/' || nextChar === '>' || /[a-zA-Z_$]/.test(nextChar))
      ) {
        result += char
        stateStack.push('jsx-tag')
        jsxTagIsEndStack.push(nextChar === '/')
        i++
      } else {
        result += char
        i++
      }
      continue
    }

    if (curState === 'jsx-tag') {
      if (char === '>') {
        result += char
        const isEnd = jsxTagIsEndStack.pop()
        const isSelfClosing = code[i - 1] === '/'
        stateStack.pop()

        if (isEnd) {
          if (stateStack[stateStack.length - 1] === 'jsx-text') {
            stateStack.pop()
          }
        } else if (!isSelfClosing) {
          stateStack.push('jsx-text')
        }
        i++
        continue
      } else if (char === '{') {
        result += char
        stateStack.push('code')
        braceDepthStack.push(1)
        i++
        continue
      } else if (char === "'") {
        result += char
        stateStack.push('single-quote')
        i++
        continue
      } else if (char === '"') {
        result += char
        stateStack.push('double-quote')
        i++
        continue
      }
    }

    if (curState === 'template-expr') {
      if (char === '{') {
        braceDepthStack[braceDepthStack.length - 1]++
      } else if (char === '}') {
        if (braceDepthStack[braceDepthStack.length - 1] > 0) {
          braceDepthStack[braceDepthStack.length - 1]--
        } else {
          result += '}'
          stateStack.pop()
          braceDepthStack.pop()
          i++
          continue
        }
      }
    }

    if (curState === 'code' && braceDepthStack.length > 0) {
      if (char === '{') {
        braceDepthStack[braceDepthStack.length - 1]++
      } else if (char === '}') {
        braceDepthStack[braceDepthStack.length - 1]--
        if (
          braceDepthStack[braceDepthStack.length - 1] === 0 &&
          stateStack.length > 1
        ) {
          result += '}'
          stateStack.pop()
          braceDepthStack.pop()
          i++
          continue
        }
      }
    }

    if (char === '/' && nextChar === '/') {
      result += '//'
      stateStack.push('single-line-comment')
      i += 2
      continue
    }
    if (char === '/' && nextChar === '*') {
      result += '/*'
      stateStack.push('multi-line-comment')
      i += 2
      continue
    }

    if (char === "'") {
      result += char
      stateStack.push('single-quote')
      i++
      continue
    }
    if (char === '"') {
      result += char
      stateStack.push('double-quote')
      i++
      continue
    }
    if (char === '`') {
      result += char
      stateStack.push('template-literal')
      i++
      continue
    }

    if (
      curState === 'code' &&
      char === '<' &&
      (nextChar === '/' || nextChar === '>' || /[a-zA-Z_$]/.test(nextChar))
    ) {
      result += char
      stateStack.push('jsx-tag')
      jsxTagIsEndStack.push(nextChar === '/')
      i++
      continue
    }

    // Replace hyphenated identifier (requiring at least one uppercase letter)
    const match = code
      .slice(i)
      .match(
        /^(?=[A-Za-z0-9_$-]*[A-Z])[a-zA-Z_$][a-zA-Z0-9_$]*(?:-[a-zA-Z0-9_$]+)+/,
      )
    if (match) {
      const matchedStr = match[0]
      result += matchedStr.replaceAll('-', '_')
      i += matchedStr.length
    } else {
      result += char
      i++
    }
  }
  return result
}

async function scaffold(slug: string) {
  const compName = toPascalCase(slug)
  const propName =
    compName.charAt(0).toLowerCase() + compName.slice(1) + 'DefaultProps'
  const dir = path.join('remotion', slug)

  // 1. Run extraction script first to get source.raw.tsx
  console.log(`Extracting raw markdown for ${slug}...`)
  execSync(`npx tsx scripts/extract-case.ts --slug=${slug}`, {
    stdio: 'inherit',
  })

  // 2. Read draft manifest for duration
  const draftManifestPath = path.join(dir, 'remotionhub.asset.draft.json')
  const draftManifest = JSON.parse(await fs.readFile(draftManifestPath, 'utf8'))
  const durationFrames = draftManifest.durationFrames ?? 120

  // 3. Read raw source code from source.raw.tsx
  const rawCodePath = path.join(dir, 'source.raw.tsx')
  let code = await fs.readFile(rawCodePath, 'utf8')

  // 4. Clean hyphenated variables dynamically
  code = replaceHyphenatedVariables(code)

  // Patch any known template typos
  code = code.replaceAll('whoushOut', 'whooshOut')

  // 5. Align component name with PascalCase of slug
  const compMatch = code.match(
    /export\s+const\s+([A-Z][A-Za-z0-9_-]*[a-z][A-Za-z0-9_-]*)\s*(?::\s*React\.FC)?\s*=/,
  )
  if (compMatch?.[1]) {
    const originalName = compMatch[1]
    if (originalName !== compName) {
      console.log(
        `Renaming component from ${originalName} to ${compName} in ${slug}`,
      )
      const escapedName = originalName.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
      const regex = new RegExp(
        `(?<![a-zA-Z0-9_$])${escapedName}(?![a-zA-Z0-9_$])`,
        'g',
      )
      code = code.replace(regex, compName)
    }
  }

  // 6. Append default props placeholder
  code += `\nexport const ${propName} = {}\n`

  // 7. Write component file
  await fs.mkdir(path.join(dir, 'src'), { recursive: true })
  await fs.writeFile(path.join(dir, 'src', `${compName}.tsx`), code, 'utf8')

  // 8. Write LICENSE
  const license = `MIT License\n\nCopyright (c) 2026 remotionlab (https://remotionlab.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n`
  await fs.writeFile(path.join(dir, 'LICENSE'), license, 'utf8')

  // 9. Write package.json
  const pkg = {
    name: `@remotionhub/${slug}`,
    version: '1.0.0',
    private: true,
    type: 'module',
    main: 'src/index.ts',
    types: 'src/index.ts',
    scripts: {
      typecheck: 'tsc -p ../../tsconfig.base.json --noEmit',
      render: `remotion render src/Root.tsx ${compName} out/${slug}.mp4`,
    },
    peerDependencies: {
      react: '>=18.0.0',
      'react-dom': '>=18.0.0',
      remotion: '>=4.0.0',
    },
  }
  await fs.writeFile(
    path.join(dir, 'package.json'),
    JSON.stringify(pkg, null, 2) + '\n',
    'utf8',
  )

  // 10. Write remotion.config.ts
  const config = `import { Config } from '@remotion/cli/config'\n\nConfig.setVideoImageFormat('jpeg')\n`
  await fs.writeFile(path.join(dir, 'remotion.config.ts'), config, 'utf8')

  // 11. Write src/Root.tsx
  const root = `import { Composition, registerRoot } from 'remotion'\nimport { ${compName}, ${propName} } from './${compName}'\n\nexport function RemotionRoot() {\n  return (\n    <Composition\n      id="${compName}"\n      component={${compName}}\n      durationInFrames={${durationFrames}}\n      fps={30}\n      width={1920}\n      height={1080}\n      defaultProps={${propName}}\n    />\n  )\n}\n\nregisterRoot(RemotionRoot)\n`
  await fs.writeFile(path.join(dir, 'src/Root.tsx'), root, 'utf8')

  // 12. Write src/index.ts
  const index = `export { ${compName}, ${propName} } from './${compName}'\n`
  await fs.writeFile(path.join(dir, 'src/index.ts'), index, 'utf8')

  console.log(`Successfully scaffolded structure for ${slug}`)
}

async function main() {
  const targets = process.argv.slice(2)
  const list = targets.length > 0 ? targets : slugs
  for (const slug of list) {
    await scaffold(slug)
  }
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
