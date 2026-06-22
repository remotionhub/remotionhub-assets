import fs from 'node:fs/promises'
import path from 'node:path'
import { execSync } from 'node:child_process'

const slugs = [
  'countdown-blast',
  'countdown-circle',
  'countdown-digital',
  'countdown-firework',
  'countdown-flip-clock',
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
]

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

function replaceHyphenatedVariables(code: string): string {
  const regex = /\b[A-Z0-9]+(?:-[A-Z0-9]+)+\b/g
  return code.replace(regex, (match) => {
    return match.replaceAll('-', '_')
  })
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

  // 2. Read raw source code from source.raw.tsx
  const rawCodePath = path.join(dir, 'source.raw.tsx')
  let code = await fs.readFile(rawCodePath, 'utf8')

  // 3. Clean hyphenated variables dynamically
  code = replaceHyphenatedVariables(code)

  // 4. Align component name with PascalCase of slug
  const compMatch = code.match(
    /export\s+const\s+(\w+)\s*(?::\s*React\.FC)?\s*=/,
  )
  if (compMatch?.[1]) {
    const originalName = compMatch[1]
    if (originalName !== compName) {
      console.log(
        `Renaming component from ${originalName} to ${compName} in ${slug}`,
      )
      code = code.replaceAll(new RegExp(`\\b${originalName}\\b`, 'g'), compName)
    }
  }

  // 5. Append default props placeholder
  code += `\nexport const ${propName} = {}\n`

  // 6. Write component file
  await fs.mkdir(path.join(dir, 'src'), { recursive: true })
  await fs.writeFile(path.join(dir, 'src', `${compName}.tsx`), code, 'utf8')

  // 7. Write LICENSE
  const license = `MIT License\n\nCopyright (c) 2026 remotionlab (https://remotionlab.com)\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n`
  await fs.writeFile(path.join(dir, 'LICENSE'), license, 'utf8')

  // 8. Write package.json
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

  // 9. Write remotion.config.ts
  const config = `import { Config } from '@remotion/cli/config'\n\nConfig.setVideoImageFormat('jpeg')\n`
  await fs.writeFile(path.join(dir, 'remotion.config.ts'), config, 'utf8')

  // 10. Write src/Root.tsx
  const root = `import { Composition } from 'remotion'\nimport React from 'react'\nimport { ${compName}, ${propName} } from './${compName}'\n\nexport const Root: React.FC = () => {\n  return (\n    <Composition\n      id="${compName}"\n      component={${compName}}\n      durationInFrames={120}\n      fps={30}\n      width={1920}\n      height={1080}\n      defaultProps={${propName}}\n    />\n  )\n}\n`
  await fs.writeFile(path.join(dir, 'src/Root.tsx'), root, 'utf8')

  // 11. Write src/index.ts
  const index = `export { ${compName}, ${propName} } from './${compName}'\n`
  await fs.writeFile(path.join(dir, 'src/index.ts'), index, 'utf8')

  console.log(`Successfully scaffolded structure for ${slug}`)
}

async function main() {
  for (const slug of slugs) {
    await scaffold(slug)
  }
}

main().catch(console.error)
