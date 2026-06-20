import { spawnSync } from 'node:child_process'
import fs from 'node:fs/promises'
import process from 'node:process'
import { readAssetManifest, writeAssetManifest } from './lib/assetManifest'

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

function run(command: string, args: string[]) {
  const result = spawnSync(command, args, { stdio: 'inherit' })
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(' ')} failed with ${result.status}`)
  }
}

async function main() {
  const slug = readArg('slug') ?? 'card-avatar'
  const manifestPath = `remotion/${slug}/remotionhub.asset.json`
  const manifest = await readAssetManifest(manifestPath)

  if (!process.argv.includes('--manifest-only')) {
    run('npx', ['tsc', '-p', 'tsconfig.base.json', '--noEmit'])
    run('npx', [
      'remotion',
      'render',
      `remotion/${slug}/src/Root.tsx`,
      manifest.compositionId,
      `remotion/${slug}/out/${slug}.mp4`,
    ])
  }

  const readme = await fs.readFile(`remotion/${slug}/README.md`, 'utf8')
  if (!readme.includes('## Props') || !readme.includes('## Agent Prompt')) {
    throw new Error(`README for ${slug} is missing required sections.`)
  }

  await writeAssetManifest(manifestPath, {
    ...manifest,
    migration: {
      ...manifest.migration,
      status: 'validated',
      updatedAt: new Date().toISOString(),
    },
  })
  console.log(`Validated ${slug}.`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
