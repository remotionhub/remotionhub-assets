import { describe, expect, it } from 'vitest'
import path from 'node:path'
import fs from 'node:fs/promises'
import os from 'node:os'
import {
  parseDurationFrames,
  parseRootDuration,
  assertDurationConsistency,
} from './compositionMetadata'

async function writeTempFile(name: string, content: string): Promise<string> {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'comp-meta-'))
  const filePath = path.join(dir, name)
  await fs.writeFile(filePath, content, 'utf8')
  return filePath
}

describe('parseDurationFrames', () => {
  it('parses a single exported *_DURATION_FRAMES constant', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { AbsoluteFill } from 'remotion'
export const MY_COMP_DURATION_FRAMES = 480;
export function MyComp() { return <AbsoluteFill />; }
`,
    )
    const result = parseDurationFrames(filePath)
    expect(result).toEqual({
      name: 'MY_COMP_DURATION_FRAMES',
      value: 480,
      filePath,
    })
  })

  it('throws when no *_DURATION_FRAMES export is found', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `import { AbsoluteFill } from 'remotion'
export function MyComp() { return <AbsoluteFill />; }
`,
    )
    expect(() => parseDurationFrames(filePath)).toThrow(
      /no \*_DURATION_FRAMES export found/i,
    )
  })

  it('throws when multiple *_DURATION_FRAMES exports are found', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `export const FIRST_DURATION_FRAMES = 100;
export const SECOND_DURATION_FRAMES = 200;
`,
    )
    expect(() => parseDurationFrames(filePath)).toThrow(
      /multiple \*_DURATION_FRAMES exports found/i,
    )
  })

  it('throws when the value is not a positive integer', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `export const MY_COMP_DURATION_FRAMES = -10;
`,
    )
    expect(() => parseDurationFrames(filePath)).toThrow(
      /not a positive integer/i,
    )
  })

  it('throws when the value is zero', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `export const MY_COMP_DURATION_FRAMES = 0;
`,
    )
    expect(() => parseDurationFrames(filePath)).toThrow(
      /not a positive integer/i,
    )
  })

  it('throws when the value is a variable reference (not a literal)', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `const x = 100;
export const MY_COMP_DURATION_FRAMES = x;
`,
    )
    expect(() => parseDurationFrames(filePath)).toThrow(
      /not a numeric literal/i,
    )
  })

  it('ignores non-exported *_DURATION_FRAMES constants', async () => {
    const filePath = await writeTempFile(
      'Comp.tsx',
      `const INTERNAL_DURATION_FRAMES = 100;
export const MY_COMP_DURATION_FRAMES = 200;
`,
    )
    const result = parseDurationFrames(filePath)
    expect(result.value).toBe(200)
  })
})

describe('parseRootDuration', () => {
  it('parses durationInFrames from a Composition JSX element', async () => {
    const filePath = await writeTempFile(
      'Root.tsx',
      `import { Composition, registerRoot } from 'remotion'
import { MyComp } from './MyComp'

export function RemotionRoot() {
  return (
    <Composition
      id="MyComp"
      component={MyComp}
      durationInFrames={480}
      fps={30}
      width={1920}
      height={1080}
    />
  )
}

registerRoot(RemotionRoot)
`,
    )
    expect(parseRootDuration(filePath)).toBe(480)
  })

  it('throws when no Composition element is found', async () => {
    const filePath = await writeTempFile(
      'Root.tsx',
      `export function RemotionRoot() {
  return <div>Hello</div>
}
`,
    )
    expect(() => parseRootDuration(filePath)).toThrow(
      /no Composition element found/i,
    )
  })

  it('throws when durationInFrames prop is missing', async () => {
    const filePath = await writeTempFile(
      'Root.tsx',
      `import { Composition } from 'remotion'
import { MyComp } from './MyComp'

export function RemotionRoot() {
  return (
    <Composition
      id="MyComp"
      component={MyComp}
      fps={30}
      width={1920}
      height={1080}
    />
  )
}
`,
    )
    expect(() => parseRootDuration(filePath)).toThrow(
      /durationInFrames not found/i,
    )
  })

  it('throws when durationInFrames is an unresolvable identifier', async () => {
    const filePath = await writeTempFile(
      'Root.tsx',
      `import { Composition } from 'remotion'
const frames = 480;
export function RemotionRoot() {
  return <Composition id="X" durationInFrames={frames} fps={30} width={1920} height={1080} />
}
`,
    )
    expect(() => parseRootDuration(filePath)).toThrow(
      /Cannot resolve import for "frames"/i,
    )
  })
})

describe('assertDurationConsistency', () => {
  it('passes when all durations match', () => {
    expect(() =>
      assertDurationConsistency({
        slug: 'test-slug',
        manifestDuration: 480,
        rootDuration: 480,
        sourceDuration: 480,
      }),
    ).not.toThrow()
  })

  it('passes when sourceDuration is omitted', () => {
    expect(() =>
      assertDurationConsistency({
        slug: 'test-slug',
        manifestDuration: 480,
        rootDuration: 480,
      }),
    ).not.toThrow()
  })

  it('throws when manifest and root durations differ', () => {
    expect(() =>
      assertDurationConsistency({
        slug: 'test-slug',
        manifestDuration: 480,
        rootDuration: 120,
        sourceDuration: 480,
      }),
    ).toThrow(/manifest.*root.*mismatch/i)
  })

  it('throws when manifest and source durations differ', () => {
    expect(() =>
      assertDurationConsistency({
        slug: 'test-slug',
        manifestDuration: 480,
        rootDuration: 480,
        sourceDuration: 240,
      }),
    ).toThrow(/manifest.*source.*mismatch/i)
  })

  it('includes the slug in the error message', () => {
    expect(() =>
      assertDurationConsistency({
        slug: 'my-asset-slug',
        manifestDuration: 100,
        rootDuration: 200,
      }),
    ).toThrow(/my-asset-slug/)
  })
})
