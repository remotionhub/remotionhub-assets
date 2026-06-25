import fs from 'node:fs/promises'
import process from 'node:process'
import { readAssetManifest, formatDefaultValue } from './lib/assetManifest'

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

async function main() {
  const slug = readArg('slug') ?? 'card-avatar'
  const manifest = await readAssetManifest(
    `remotion/${slug}/remotionhub.asset.json`,
  )
  const componentName = manifest.compositionId
  const defaultPropsName =
    componentName.charAt(0).toLowerCase() +
    componentName.slice(1) +
    'DefaultProps'
  const propsTable = manifest.propsSchema
    .map(
      (prop) =>
        `| \`${prop.name}\` | \`${prop.type}\` | \`${formatDefaultValue(prop.defaultValue)}\` | ${prop.description} |`,
    )
    .join('\n')
  const titleHeader = manifest.displayNameZh
    ? `# ${manifest.displayNameZh} (${manifest.displayName})`
    : `# ${manifest.displayName}`

  const readme = `${titleHeader}

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/${manifest.slug}). Credit goes to the original creator at remotionlab.

![Preview](${manifest.thumbnailUrl})

Reusable Remotion component migrated from ${manifest.sourceUrl}.

## Usage

Copy \`src/${componentName}.tsx\` into your Remotion project and register it in your composition root.

\`\`\`tsx
import { Composition } from 'remotion'
import { ${componentName}, ${defaultPropsName} } from './${componentName}'

export function RemotionRoot() {
  return (
    <Composition
      id="${componentName}"
      component={${componentName}}
      durationInFrames={${manifest.durationFrames}}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={${defaultPropsName}}
    />
  )
}
\`\`\`

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
${propsTable}

## Extra Dependencies

${manifest.extraDependencies.length > 0 ? manifest.extraDependencies.map((dep) => `- \`${dep}\``).join('\n') : 'None.'}

## Agent Prompt

\`\`\`text
${manifest.prompt}
\`\`\`

## Links

- RemotionHub: https://remotionhub.ai/terence/${manifest.slug}
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/${manifest.slug}

## License

${manifest.license}
`

  await fs.writeFile(`remotion/${slug}/README.md`, readme, 'utf8')
  console.log(`Generated remotion/${slug}/README.md`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
