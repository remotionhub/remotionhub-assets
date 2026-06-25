import fs from 'node:fs/promises'
import { describe, expect, it } from 'vitest'
import { parseRemotionLabMarkdown } from './remotionlabMarkdown'

describe('parseRemotionLabMarkdown', () => {
  it.skip('extracts card-avatar metadata, prompt, code, and media URLs — requires /tmp/remotionlab/案例/card-avatar.md fixture', async () => {
    const sourceFile = '/tmp/remotionlab/案例/card-avatar.md'
    const markdown = await fs.readFile(sourceFile, 'utf8')
    const parsed = parseRemotionLabMarkdown(markdown, sourceFile)

    expect(parsed.slug).toBe('card-avatar')
    expect(parsed.title).toBe('头像字卡')
    expect(parsed.sourceUrl).toBe(
      'https://remotionlab.com/showcase/card-avatar',
    )
    expect(parsed.previewUrl).toContain('/showcase/card-avatar/preview.mp4')
    expect(parsed.thumbnailUrl).toContain('/showcase/card-avatar/thumb.jpg')
    expect(parsed.prompt).toContain('Jane Smith')
    expect(parsed.code).toContain('export const CardAvatar')
  })
})
