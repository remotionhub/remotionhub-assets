import fs from 'node:fs/promises'
import { z } from 'zod'

const migrationStatusSchema = z.union([
  z.literal('pending'),
  z.literal('extracted'),
  z.literal('media-mirrored'),
  z.literal('sanitized'),
  z.literal('validated'),
  z.literal('published'),
  z.literal('blocked'),
])

const httpsUrlSchema = z.string().url().startsWith('https://')
const remotionHubMediaUrlSchema = httpsUrlSchema.refine(
  (value) => !value.includes('pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev'),
  { message: 'Published media URLs must be RemotionHub-controlled.' },
)

export const propSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  defaultValue: z.union([z.string(), z.number(), z.boolean()]),
  description: z.string().min(1),
})

export const assetManifestSchema = z.object({
  slug: z.string().regex(/^[a-z0-9](?:[a-z0-9-]{0,78}[a-z0-9])?$/),
  displayName: z.string().min(1),
  runtime: z.literal('remotion'),
  sourceUrl: httpsUrlSchema,
  originalPreviewUrl: httpsUrlSchema,
  originalThumbnailUrl: httpsUrlSchema,
  previewUrl: remotionHubMediaUrlSchema,
  thumbnailUrl: remotionHubMediaUrlSchema,
  entryPoint: z.string().min(1),
  compositionId: z.string().min(1),
  durationFrames: z.number().int().positive(),
  fps: z.number().int().positive(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  aspectRatios: z.array(z.string().min(1)).min(1),
  license: z.string().min(1),
  prompt: z.string().min(1),
  propsSchema: z.array(propSchema),
  extraDependencies: z.array(z.string().min(1)),
  migration: z.object({
    status: migrationStatusSchema,
    sourceFile: z.string().min(1),
    updatedAt: z.string().datetime(),
    blockedReason: z.string().min(1).optional(),
  }),
})

export type AssetManifest = z.infer<typeof assetManifestSchema>

export const inventoryCaseSchema = z.object({
  slug: z.string().min(1),
  status: migrationStatusSchema,
  sourceFile: z.string().min(1),
  assetPath: z.string().min(1).optional(),
  blockedReason: z.string().min(1).optional(),
  updatedAt: z.string().datetime(),
})

export const inventorySchema = z.object({
  cases: z.array(inventoryCaseSchema),
})

export type Inventory = z.infer<typeof inventorySchema>

export async function readAssetManifest(pathname: string) {
  const raw = await fs.readFile(pathname, 'utf8')
  return assetManifestSchema.parse(JSON.parse(raw))
}

export async function writeAssetManifest(
  pathname: string,
  manifest: AssetManifest,
) {
  const parsed = assetManifestSchema.parse(manifest)
  await fs.writeFile(pathname, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}
