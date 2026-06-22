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
  formatDefaultValue,
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

function parseMarkdownTableCells(line: string) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((cell) => cell.trim())
}

function isMarkdownTableRow(line: string) {
  return line.trim().startsWith('|')
}

function isMarkdownSeparatorRow(cells: string[]) {
  return cells.every((cell) => /^:?-{3,}:?$/.test(cell))
}

function stripBackticks(str: string) {
  return str.replace(/^`|`$/g, '')
}

function assertValidPropsTable(
  readme: string,
  slug: string,
  manifest: AssetManifest,
) {
  const lines = readme.split('\n')
  const propsIndex = lines.findIndex((line) => line.startsWith('## Props'))
  if (propsIndex === -1) {
    return
  }

  const tableRows: string[] = []
  for (let index = propsIndex + 1; index < lines.length; index++) {
    const line = lines[index].trim()
    if (line.startsWith('#')) {
      break
    }

    if (isMarkdownTableRow(line)) {
      tableRows.push(line)
    }
  }

  const schemaProps = manifest.propsSchema || []

  if (tableRows.length === 0) {
    if (schemaProps.length > 0) {
      throw new Error(
        `README for ${slug} is missing a Props table, but manifest contains props.`,
      )
    }
    return
  }

  const header = parseMarkdownTableCells(tableRows[0])
  const expectedHeader = ['Name', 'Type', 'Default', 'Description']
  if (header.some((cell) => cell.length === 0)) {
    throw new Error(`README for ${slug} has a malformed Props table.`)
  }

  if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
    throw new Error(
      `README for ${slug} Props table must use columns: ${expectedHeader.join(', ')}.`,
    )
  }

  // Filter out separator row
  const contentRows = tableRows.slice(1).filter((row) => {
    const cells = parseMarkdownTableCells(row)
    return !isMarkdownSeparatorRow(cells)
  })

  if (contentRows.length !== schemaProps.length) {
    throw new Error(
      `README for ${slug} Props table has ${contentRows.length} rows, but manifest has ${schemaProps.length} props.`,
    )
  }

  for (let i = 0; i < contentRows.length; i++) {
    const cells = parseMarkdownTableCells(contentRows[i])
    if (cells.length !== expectedHeader.length) {
      throw new Error(
        `README for ${slug} Props table must use columns: ${expectedHeader.join(', ')}.`,
      )
    }

    if (cells.some((cell) => cell.length === 0)) {
      throw new Error(`README for ${slug} has a malformed Props table.`)
    }

    const name = stripBackticks(cells[0])
    const type = stripBackticks(cells[1])
    const defaultValue = stripBackticks(cells[2])
    const description = cells[3]

    const expectedProp = schemaProps[i]
    if (name !== expectedProp.name) {
      throw new Error(
        `README for ${slug} Props table row ${i + 1}: expected name '${expectedProp.name}', found '${name}'.`,
      )
    }

    if (type !== expectedProp.type) {
      throw new Error(
        `README for ${slug} Props table row ${i + 1}: expected type '${expectedProp.type}', found '${type}'.`,
      )
    }

    const expectedDefault = formatDefaultValue(expectedProp.defaultValue)
    if (defaultValue !== expectedDefault) {
      throw new Error(
        `README for ${slug} Props table row ${i + 1}: expected default value '${expectedDefault}', found '${defaultValue}'.`,
      )
    }

    if (description !== expectedProp.description) {
      throw new Error(
        `README for ${slug} Props table row ${i + 1}: expected description '${expectedProp.description}', found '${description}'.`,
      )
    }
  }
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
  assertValidPropsTable(readme, slug, manifest)

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
