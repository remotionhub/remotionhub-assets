import { spawnSync } from 'node:child_process'
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

const INVENTORY_PATH = path.join('manifest', 'remotionlab-showcase.json')

type ValidationOptions = {
  cwd?: string
  slug?: string
  manifestOnly?: boolean
  runCommand?: (command: string, args: string[]) => void
  now?: () => string
}

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

async function readInventory(pathname: string) {
  const raw = await fs.readFile(pathname, 'utf8')
  return inventorySchema.parse(JSON.parse(raw))
}

async function writeInventory(pathname: string, inventory: Inventory) {
  const parsed = inventorySchema.parse(inventory)
  await fs.writeFile(pathname, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}

function withValidatedStatus(
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
      status: 'validated',
      updatedAt,
    },
  }
}

function withValidatedInventory(
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
        status: 'validated',
        updatedAt,
      }
    }),
  })
}

export async function runValidation(options: ValidationOptions = {}) {
  const cwd = options.cwd ?? process.cwd()
  const slug = options.slug ?? readArg('slug') ?? 'card-avatar'
  const manifestOnly =
    options.manifestOnly ?? process.argv.includes('--manifest-only')
  const runCommand = options.runCommand ?? run
  const manifestPath = path.join(
    cwd,
    'remotion',
    slug,
    'remotionhub.asset.json',
  )
  const inventoryPath = path.join(cwd, INVENTORY_PATH)
  const manifest = await readAssetManifest(manifestPath)

  if (!manifestOnly) {
    runCommand('npx', ['tsc', '-p', 'tsconfig.base.json', '--noEmit'])
    runCommand('npx', [
      'remotion',
      'render',
      `remotion/${slug}/src/Root.tsx`,
      manifest.compositionId,
      `remotion/${slug}/out/${slug}.mp4`,
    ])
  }

  const readme = await fs.readFile(
    path.join(cwd, 'remotion', slug, 'README.md'),
    'utf8',
  )
  if (!readme.includes('## Props') || !readme.includes('## Agent Prompt')) {
    throw new Error(`README for ${slug} is missing required sections.`)
  }

  if (manifestOnly) {
    return { slug, status: manifest.migration.status, manifestOnly: true }
  }

  const updatedAt = options.now?.() ?? new Date().toISOString()
  const nextManifest = withValidatedStatus(manifest, updatedAt)
  if (nextManifest !== manifest) {
    await writeAssetManifest(manifestPath, nextManifest)
  }

  const inventory = await readInventory(inventoryPath)
  const nextInventory = withValidatedInventory(inventory, slug, updatedAt)
  if (JSON.stringify(nextInventory) !== JSON.stringify(inventory)) {
    await writeInventory(inventoryPath, nextInventory)
  }

  return { slug, status: nextManifest.migration.status, manifestOnly: false }
}

async function main() {
  const result = await runValidation()
  console.log(`Validated ${result.slug}: ${result.status}.`)
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
