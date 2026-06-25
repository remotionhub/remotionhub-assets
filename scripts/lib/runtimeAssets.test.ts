import { describe, expect, it } from 'vitest'
import path from 'node:path'
import fs from 'node:fs/promises'
import os from 'node:os'
import {
  parseStaticFileCalls,
  generateRuntimeAssetsModule,
  type RuntimeAssetEntry,
} from './runtimeAssets'

async function writeTempFile(name: string, content: string): Promise<string> {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'runtime-assets-'))
  const filePath = path.join(dir, name)
  await fs.writeFile(filePath, content, 'utf8')
  return filePath
}

describe('parseStaticFileCalls', () => {
  it('finds static string staticFile() calls', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile, Audio } from 'remotion'
const woosh = staticFile("audio/connection/woosh.wav")
const tick = staticFile('audio/connection/tick.wav')
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([
      { arg: 'audio/connection/woosh.wav', line: 2 },
      { arg: 'audio/connection/tick.wav', line: 3 },
    ])
  })

  it('ignores calls that are not staticFile', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const x = someOtherFunction("foo.wav")
const y = staticFile("bar.wav")
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([{ arg: 'bar.wav', line: 3 }])
  })

  it('ignores staticFile used as a reference (not a call)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const fn = staticFile
const x = fn("foo.wav")
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([])
  })

  it('throws on dynamic staticFile arguments (variable)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const name = "foo.wav"
const x = staticFile(name)
`,
    )
    expect(() => parseStaticFileCalls(filePath)).toThrow(/dynamic argument/i)
  })

  it('throws on dynamic staticFile arguments (template literal)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const x = staticFile(\`audio/\${name}.wav\`)
`,
    )
    expect(() => parseStaticFileCalls(filePath)).toThrow(/dynamic argument/i)
  })

  it('throws on dynamic staticFile arguments (no arguments)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const x = staticFile()
`,
    )
    expect(() => parseStaticFileCalls(filePath)).toThrow(
      /exactly one string literal argument/i,
    )
  })

  it('throws on multiple arguments', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'
const x = staticFile("foo.wav", "bar")
`,
    )
    expect(() => parseStaticFileCalls(filePath)).toThrow(
      /exactly one string literal argument/i,
    )
  })

  it('returns empty array when no staticFile calls exist', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { Audio } from 'remotion'
export function MyComp() { return <Audio src="foo" /> }
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([])
  })

  it('tracks correct line numbers', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile } from 'remotion'

// some comment
const a = staticFile("a.wav")

const b = staticFile("b.wav")
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result[0].line).toBe(4)
    expect(result[1].line).toBe(6)
  })

  it('handles staticFile inside JSX attributes', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { staticFile, Audio } from 'remotion'
export function MyComp() {
  return <Audio src={staticFile("click.mp3")} />
}
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([{ arg: 'click.mp3', line: 3 }])
  })

  it('handles staticFile with property access expression (e.g. obj.staticFile)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `const obj = { staticFile: (p: string) => p }
const x = obj.staticFile("foo.wav")
`,
    )
    const result = parseStaticFileCalls(filePath)
    expect(result).toEqual([])
  })
})

describe('generateRuntimeAssetsModule', () => {
  it('generates a module with sorted entries', () => {
    const entries: RuntimeAssetEntry[] = [
      {
        sourcePath: 'audio/connection/tick.wav',
        url: 'https://example.com/runtime/sha256/ccc',
        sha256: 'ccc',
        byteSize: 100,
        contentType: 'audio/wav',
      },
      {
        sourcePath: 'audio/connection/woosh.wav',
        url: 'https://example.com/runtime/sha256/aaa',
        sha256: 'aaa',
        byteSize: 200,
        contentType: 'audio/wav',
      },
      {
        sourcePath: 'avatar-2.png',
        url: 'https://example.com/runtime/sha256/bbb',
        sha256: 'bbb',
        byteSize: 300,
        contentType: 'image/png',
      },
    ]
    const result = generateRuntimeAssetsModule(entries)
    expect(result).toContain("'audio/connection/tick.wav'")
    expect(result).toContain("'audio/connection/woosh.wav'")
    expect(result).toContain("'avatar-2.png'")

    const lines = result.split('\n')
    const tickIdx = lines.findIndex((l) =>
      l.includes("'audio/connection/tick.wav'"),
    )
    const wooshIdx = lines.findIndex((l) =>
      l.includes("'audio/connection/woosh.wav'"),
    )
    const avatarIdx = lines.findIndex((l) => l.includes("'avatar-2.png'"))
    expect(tickIdx).toBeLessThan(wooshIdx)
    expect(wooshIdx).toBeLessThan(avatarIdx)
  })

  it('generates runtimeAssets const with correct URLs', () => {
    const entries: RuntimeAssetEntry[] = [
      {
        sourcePath: 'foo.wav',
        url: 'https://example.com/runtime/sha256/abc123',
        sha256: 'abc123',
        byteSize: 100,
        contentType: 'audio/wav',
      },
    ]
    const result = generateRuntimeAssetsModule(entries)
    expect(result).toContain(
      "'foo.wav': 'https://example.com/runtime/sha256/abc123'",
    )
  })

  it('generates RuntimeAssetPath type export', () => {
    const entries: RuntimeAssetEntry[] = [
      {
        sourcePath: 'foo.wav',
        url: 'https://example.com/runtime/sha256/abc',
        sha256: 'abc',
        byteSize: 100,
        contentType: 'audio/wav',
      },
    ]
    const result = generateRuntimeAssetsModule(entries)
    expect(result).toContain('export type RuntimeAssetPath')
    expect(result).toContain('keyof typeof runtimeAssets')
  })

  it('generates runtimeAsset helper function', () => {
    const entries: RuntimeAssetEntry[] = [
      {
        sourcePath: 'foo.wav',
        url: 'https://example.com/runtime/sha256/abc',
        sha256: 'abc',
        byteSize: 100,
        contentType: 'audio/wav',
      },
    ]
    const result = generateRuntimeAssetsModule(entries)
    expect(result).toContain(
      'export function runtimeAsset(path: RuntimeAssetPath)',
    )
    expect(result).toContain('return runtimeAssets[path]')
  })

  it('generates empty runtimeAssets when no entries', () => {
    const result = generateRuntimeAssetsModule([])
    expect(result).toContain('export const runtimeAssets = {')
    expect(result).toContain('} as const')
    expect(result).toContain('export type RuntimeAssetPath')
    expect(result).toContain('export function runtimeAsset')
  })

  it('includes sourcePath comment for each entry', () => {
    const entries: RuntimeAssetEntry[] = [
      {
        sourcePath: 'audio/connection/woosh.wav',
        url: 'https://example.com/runtime/sha256/abc',
        sha256: 'abc',
        byteSize: 100,
        contentType: 'audio/wav',
      },
    ]
    const result = generateRuntimeAssetsModule(entries)
    expect(result).toContain('// audio/connection/woosh.wav')
  })
})
