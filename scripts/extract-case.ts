import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import { inventorySchema } from './lib/assetManifest'
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

function readArg(name: string) {
  return process.argv
    .find((arg) => arg.startsWith(`--${name}=`))
    ?.slice(name.length + 3)
}

function nowIso() {
  return new Date().toISOString()
}

async function writeJson(pathname: string, value: unknown) {
  await fs.writeFile(pathname, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

async function main() {
  const slug = readArg('slug') ?? 'card-avatar'
  const sourceFile = readArg('source') ?? `/tmp/remotionlab/案例/${slug}.md`
  const markdown = await fs.readFile(sourceFile, 'utf8')
  const parsed = parseRemotionLabMarkdown(markdown, sourceFile)
  const assetPath = path.join('remotion', parsed.slug)
  const updatedAt = nowIso()

  const draftManifest: DraftAssetManifest = {
    slug: parsed.slug,
    displayName: 'Card Avatar',
    runtime: 'remotion',
    sourceUrl: parsed.sourceUrl,
    originalPreviewUrl: parsed.previewUrl,
    originalThumbnailUrl: parsed.thumbnailUrl,
    previewUrl: parsed.previewUrl,
    thumbnailUrl: parsed.thumbnailUrl,
    entryPoint: 'src/CardAvatar.tsx',
    compositionId: 'CardAvatar',
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

  const inventory = inventorySchema.parse({
    cases: [
      {
        slug: parsed.slug,
        status: 'extracted',
        sourceFile,
        assetPath,
        updatedAt,
      },
    ],
  })

  await fs.mkdir(assetPath, { recursive: true })
  await fs.mkdir('manifest', { recursive: true })
  await writeJson(
    path.join(assetPath, 'remotionhub.asset.draft.json'),
    draftManifest,
  )
  await fs.writeFile(
    path.join(assetPath, 'source.raw.tsx'),
    `${parsed.code}\n`,
    'utf8',
  )
  await writeJson('manifest/remotionlab-showcase.json', inventory)

  console.log(`Extracted ${parsed.slug} to ${assetPath}.`)
}

main().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
