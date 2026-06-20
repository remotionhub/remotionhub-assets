import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'
import { afterEach, describe, expect, it } from 'vitest'
import { runExtraction } from './extract-case'

const createdDirs: string[] = []

async function makeTempDir() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'extract-case-test-'))
  createdDirs.push(tempDir)
  return tempDir
}

async function writeSourceFile(tempDir: string, slug = 'card-avatar') {
  const sourceFile = path.join(tempDir, `${slug}.md`)
  await fs.writeFile(
    sourceFile,
    `---
slug: "${slug}"
title: "Example"
source: "https://remotionlab.com/showcase/${slug}"
lastmod: "2026-06-20"
---

[Video](https://remotionlab.com/showcase/${slug}/preview.mp4)
[Poster](https://remotionlab.com/showcase/${slug}/thumb.jpg)

\`\`\`text
Jane Smith
\`\`\`

\`\`\`tsx
export const CardAvatar = () => null
\`\`\`
`,
    'utf8',
  )
  return sourceFile
}

afterEach(async () => {
  await Promise.all(
    createdDirs
      .splice(0, createdDirs.length)
      .map((tempDir) => fs.rm(tempDir, { recursive: true, force: true })),
  )
})

describe('runExtraction', () => {
  it('preserves unrelated inventory cases when extracting card-avatar', async () => {
    const tempDir = await makeTempDir()
    const sourceFile = await writeSourceFile(tempDir)
    await fs.mkdir(path.join(tempDir, 'manifest'), { recursive: true })
    await fs.writeFile(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
      `${JSON.stringify(
        {
          cases: [
            {
              slug: 'zeta-case',
              status: 'pending',
              sourceFile: '/tmp/remotionlab/案例/zeta-case.md',
              updatedAt: '2026-06-20T00:00:00.000Z',
            },
          ],
        },
        null,
        2,
      )}\n`,
      'utf8',
    )

    await runExtraction({
      cwd: tempDir,
      slug: 'card-avatar',
      sourceFile,
      now: () => '2026-06-20T12:34:56.000Z',
    })

    const rawInventory = await fs.readFile(
      path.join(tempDir, 'manifest', 'remotionlab-showcase.json'),
      'utf8',
    )

    expect(JSON.parse(rawInventory)).toEqual({
      cases: [
        {
          slug: 'card-avatar',
          status: 'extracted',
          sourceFile,
          assetPath: 'remotion/card-avatar',
          updatedAt: '2026-06-20T12:34:56.000Z',
        },
        {
          slug: 'zeta-case',
          status: 'pending',
          sourceFile: '/tmp/remotionlab/案例/zeta-case.md',
          updatedAt: '2026-06-20T00:00:00.000Z',
        },
      ],
    })
  })

  it('rejects unsupported slugs for the first migration slice', async () => {
    const tempDir = await makeTempDir()
    const sourceFile = await writeSourceFile(tempDir, 'other-case')

    await expect(
      runExtraction({
        cwd: tempDir,
        slug: 'other-case',
        sourceFile,
      }),
    ).rejects.toThrow(
      'Only card-avatar extraction is supported in the first migration slice.',
    )
  })
})
