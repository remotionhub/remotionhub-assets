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
const slugSchema = z.string().regex(/^[a-z0-9](?:[a-z0-9-]{0,78}[a-z0-9])?$/)
const sourceSiteMediaUrlSchema = httpsUrlSchema.refine(
  (value) => {
    const url = new URL(value)
    return url.hostname === 'pub-1cc20f8a898349ab9b2823b040fcd0b8.r2.dev'
  },
  { message: 'Draft media URLs must point to the source-site bucket.' },
)
const remotionHubMediaUrlSchema = httpsUrlSchema.refine(
  (value) => {
    const url = new URL(value)
    return (
      [
        'assets.remotionhub.ai',
        'remotionhub.oss-cn-shenzhen.aliyuncs.com',
      ].includes(url.hostname) && url.pathname.length > 1
    )
  },
  { message: 'Published media URLs must be RemotionHub-controlled.' },
)

export const propSchema = z.object({
  name: z.string().min(1),
  type: z.string().min(1),
  defaultValue: z.any(),
  description: z.string().min(1),
})

export const assetManifestSchema = z.object({
  slug: slugSchema,
  displayName: z.string().min(1),
  displayNameZh: z.string().min(1).optional(),
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

export const draftAssetManifestSchema = z.object({
  slug: slugSchema,
  displayName: z.string().min(1),
  displayNameZh: z.string().min(1).optional(),
  runtime: z.literal('remotion'),
  sourceUrl: httpsUrlSchema,
  originalPreviewUrl: sourceSiteMediaUrlSchema,
  originalThumbnailUrl: sourceSiteMediaUrlSchema,
  previewUrl: sourceSiteMediaUrlSchema,
  thumbnailUrl: sourceSiteMediaUrlSchema,
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
    status: z.literal('extracted'),
    sourceFile: z.string().min(1),
    updatedAt: z.string().datetime(),
  }),
})

export type DraftAssetManifest = z.infer<typeof draftAssetManifestSchema>

export const inventoryCaseSchema = z.object({
  slug: slugSchema,
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

export async function readDraftAssetManifest(pathname: string) {
  const raw = await fs.readFile(pathname, 'utf8')
  return draftAssetManifestSchema.parse(JSON.parse(raw))
}

export async function writeAssetManifest(
  pathname: string,
  manifest: AssetManifest,
) {
  const parsed = assetManifestSchema.parse(manifest)
  await fs.writeFile(pathname, `${JSON.stringify(parsed, null, 2)}\n`, 'utf8')
}

export function formatDefaultValue(value: unknown): string {
  if (value === null || value === undefined) {
    return ''
  }
  if (typeof value === 'object') {
    return JSON.stringify(value)
  }
  return String(value)
}
