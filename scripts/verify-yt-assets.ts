import fs from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import {
  type AssetManifest,
  assetManifestSchema,
} from './lib/assetManifest'
import {
  parseDurationFrames,
  parseRootDuration,
} from './lib/compositionMetadata'
import { parseStaticFileCalls } from './lib/runtimeAssets'

type VerificationOptions = {
  cwd?: string
  checkRemote?: boolean
}

type VerificationError = {
  slug: string
  check: string
  message: string
}

function toPascalCase(slug: string) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

async function readJsonFile(filePath: string) {
  const raw = await fs.readFile(filePath, 'utf8')
  return JSON.parse(raw)
}

async function readManifest(filePath: string): Promise<AssetManifest> {
  const raw = await fs.readFile(filePath, 'utf8')
  return assetManifestSchema.parse(JSON.parse(raw))
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function verifySlugDirectoryMapping(
  cwd: string,
  canonicalSlugs: string[],
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []

  for (const slug of canonicalSlugs) {
    const dirPath = path.join(cwd, 'remotion', slug)
    if (!(await fileExists(dirPath))) {
      errors.push({
        slug,
        check: 'directory-exists',
        message: `Missing directory: remotion/${slug}/`,
      })
    }
  }

  return errors
}

async function verifyReverseMapping(
  cwd: string,
  canonicalSlugs: Set<string>,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []
  const remotionDir = path.join(cwd, 'remotion')

  if (!(await fileExists(remotionDir))) {
    return errors
  }

  const entries = await fs.readdir(remotionDir, { withFileTypes: true })

  for (const entry of entries) {
    if (!entry.isDirectory() || !entry.name.startsWith('yt-')) continue

    const slug = entry.name
    const manifestPath = path.join(remotionDir, slug, 'remotionhub.asset.json')

    if (!(await fileExists(manifestPath))) continue

    if (!canonicalSlugs.has(slug)) {
      errors.push({
        slug,
        check: 'reverse-mapping',
        message: `Directory remotion/${slug}/ has remotionhub.asset.json but slug is not in canonical list`,
      })
    }
  }

  return errors
}

async function verifyDurationConsistency(
  cwd: string,
  slug: string,
  manifest: AssetManifest,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []
  const rootPath = path.join(cwd, 'remotion', slug, 'src', 'Root.tsx')

  if (!(await fileExists(rootPath))) {
    errors.push({
      slug,
      check: 'root-exists',
      message: `Missing Root.tsx: remotion/${slug}/src/Root.tsx`,
    })
    return errors
  }

  try {
    const rootDuration = parseRootDuration(rootPath)
    if (rootDuration !== manifest.durationFrames) {
      errors.push({
        slug,
        check: 'duration-manifest-root',
        message: `Duration mismatch: manifest=${manifest.durationFrames}, Root.tsx=${rootDuration}`,
      })
    }
  } catch (error) {
    errors.push({
      slug,
      check: 'duration-manifest-root',
      message: `Failed to parse Root.tsx duration: ${error instanceof Error ? error.message : String(error)}`,
    })
  }

  return errors
}

async function verifyComponentDuration(
  cwd: string,
  slug: string,
  manifest: AssetManifest,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []
  const pascalName = toPascalCase(slug)
  const componentPath = path.join(
    cwd,
    'remotion',
    slug,
    'src',
    `${pascalName}.tsx`,
  )

  if (!(await fileExists(componentPath))) {
    return errors
  }

  try {
    const durationInfo = parseDurationFrames(componentPath)
    if (durationInfo.value !== manifest.durationFrames) {
      errors.push({
        slug,
        check: 'duration-manifest-component',
        message: `Duration mismatch: manifest=${manifest.durationFrames}, ${pascalName}.tsx ${durationInfo.name}=${durationInfo.value}`,
      })
    }
  } catch {
    // No *_DURATION_FRAMES export found — that's OK
  }

  return errors
}

async function verifyNoStaticFileCalls(
  cwd: string,
  slug: string,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []
  const pascalName = toPascalCase(slug)
  const componentPath = path.join(
    cwd,
    'remotion',
    slug,
    'src',
    `${pascalName}.tsx`,
  )

  if (!(await fileExists(componentPath))) {
    return errors
  }

  try {
    const calls = parseStaticFileCalls(componentPath)
    for (const call of calls) {
      errors.push({
        slug,
        check: 'no-staticFile',
        message: `staticFile() call found at ${componentPath}:${call.line}: staticFile("${call.arg}")`,
      })
    }
  } catch {
    // Parse error — that's OK for this check
  }

  return errors
}

async function verifyRuntimeAssets(
  cwd: string,
  slug: string,
  manifest: AssetManifest,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []

  if (!manifest.runtimeAssets || manifest.runtimeAssets.length === 0) {
    return errors
  }

  const runtimeAssetsPath = path.join(cwd, 'remotion', slug, 'src', 'runtime-assets.ts')

  if (!(await fileExists(runtimeAssetsPath))) {
    errors.push({
      slug,
      check: 'runtime-assets-file',
      message: `Manifest has runtimeAssets but missing src/runtime-assets.ts`,
    })
    return errors
  }

  const content = await fs.readFile(runtimeAssetsPath, 'utf8')

  for (const entry of manifest.runtimeAssets) {
    if (!content.includes(entry.sourcePath)) {
      errors.push({
        slug,
        check: 'runtime-assets-entry',
        message: `Runtime asset entry "${entry.sourcePath}" not found in src/runtime-assets.ts`,
      })
    }
  }

  return errors
}

async function verifyLockfileEntries(
  cwd: string,
  canonicalSlugs: string[],
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []
  const lockfilePath = path.join(cwd, 'package-lock.json')

  if (!(await fileExists(lockfilePath))) {
    errors.push({
      slug: '*',
      check: 'lockfile-exists',
      message: 'Missing package-lock.json',
    })
    return errors
  }

  const lockfileContent = await fs.readFile(lockfilePath, 'utf8')

  for (const slug of canonicalSlugs) {
    const workspaceName = `@remotionhub/${slug}`
    if (!lockfileContent.includes(`"node_modules/${workspaceName}"`)) {
      errors.push({
        slug,
        check: 'lockfile-workspace',
        message: `Workspace "${workspaceName}" not found in package-lock.json`,
      })
    }
  }

  return errors
}

async function verifyRemoteAssets(
  slug: string,
  manifest: AssetManifest,
): Promise<VerificationError[]> {
  const errors: VerificationError[] = []

  if (!manifest.runtimeAssets || manifest.runtimeAssets.length === 0) {
    return errors
  }

  for (const entry of manifest.runtimeAssets) {
    try {
      const response = await fetch(entry.url, { method: 'HEAD' })

      if (!response.ok) {
        errors.push({
          slug,
          check: 'remote-asset-downloadable',
          message: `Runtime asset "${entry.sourcePath}" URL not downloadable: ${entry.url} (status: ${response.status})`,
        })
        continue
      }

      const contentLength = response.headers.get('content-length')
      if (contentLength && Number(contentLength) !== entry.byteSize) {
        errors.push({
          slug,
          check: 'remote-asset-size',
          message: `Runtime asset "${entry.sourcePath}" size mismatch: manifest=${entry.byteSize}, remote=${contentLength}`,
        })
      }

      const contentType = response.headers.get('content-type')
      if (contentType && !contentType.includes(entry.contentType)) {
        errors.push({
          slug,
          check: 'remote-asset-type',
          message: `Runtime asset "${entry.sourcePath}" content-type mismatch: manifest=${entry.contentType}, remote=${contentType}`,
        })
      }
    } catch (error) {
      errors.push({
        slug,
        check: 'remote-asset-error',
        message: `Failed to check runtime asset "${entry.sourcePath}": ${error instanceof Error ? error.message : String(error)}`,
      })
    }
  }

  return errors
}

export async function runVerification(options: VerificationOptions = {}) {
  const cwd = options.cwd ?? process.cwd()
  const checkRemote = options.checkRemote ?? process.argv.includes('--check-remote')

  const slugsPath = path.join(cwd, 'manifest', 'yt-animation-slugs.json')
  const canonicalSlugs: string[] = JSON.parse(await fs.readFile(slugsPath, 'utf8'))
  const canonicalSlugSet = new Set(canonicalSlugs)

  const errors: VerificationError[] = []

  errors.push(...await verifySlugDirectoryMapping(cwd, canonicalSlugs))
  errors.push(...await verifyReverseMapping(cwd, canonicalSlugSet))
  errors.push(...await verifyLockfileEntries(cwd, canonicalSlugs))

  for (const slug of canonicalSlugs) {
    const manifestPath = path.join(cwd, 'remotion', slug, 'remotionhub.asset.json')

    if (!(await fileExists(manifestPath))) {
      errors.push({
        slug,
        check: 'manifest-exists',
        message: `Missing manifest: remotion/${slug}/remotionhub.asset.json`,
      })
      continue
    }

    let manifest: AssetManifest
    try {
      manifest = await readManifest(manifestPath)
    } catch (error) {
      errors.push({
        slug,
        check: 'manifest-valid',
        message: `Invalid manifest: ${error instanceof Error ? error.message : String(error)}`,
      })
      continue
    }

    errors.push(...await verifyDurationConsistency(cwd, slug, manifest))
    errors.push(...await verifyComponentDuration(cwd, slug, manifest))
    errors.push(...await verifyNoStaticFileCalls(cwd, slug))
    errors.push(...await verifyRuntimeAssets(cwd, slug, manifest))

    if (checkRemote) {
      errors.push(...await verifyRemoteAssets(slug, manifest))
    }
  }

  return { errors, totalSlugs: canonicalSlugs.length }
}

async function main() {
  const result = await runVerification()

  if (result.errors.length === 0) {
    console.log(`✓ All ${result.totalSlugs} yt-* assets verified successfully.`)
    process.exit(0)
  }

  console.error(`✗ Found ${result.errors.length} verification errors:\n`)

  const byCheck = new Map<string, VerificationError[]>()
  for (const error of result.errors) {
    const group = byCheck.get(error.check) ?? []
    group.push(error)
    byCheck.set(error.check, group)
  }

  for (const [check, group] of byCheck) {
    console.error(`[${check}] (${group.length} errors)`)
    for (const error of group.slice(0, 5)) {
      console.error(`  - ${error.slug}: ${error.message}`)
    }
    if (group.length > 5) {
      console.error(`  ... and ${group.length - 5} more`)
    }
    console.error()
  }

  process.exit(1)
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
