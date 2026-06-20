export type RemotionLabCase = {
  slug: string
  title: string
  sourceUrl: string
  lastmod: string
  sourceFile: string
  previewUrl: string
  thumbnailUrl: string
  prompt: string
  code: string
}

function readFrontmatterValue(markdown: string, key: string) {
  const match = markdown.match(new RegExp(`^${key}:\\s+"?([^"\\n]+)"?$`, 'm'))
  if (!match?.[1]) {
    throw new Error(`Missing frontmatter key ${key}.`)
  }
  return match[1]
}

function readCodeBlocks(markdown: string) {
  const blocks: Array<{ language: string; body: string }> = []
  const pattern = /```([a-zA-Z]*)\n([\s\S]*?)\n```/g

  for (const match of markdown.matchAll(pattern)) {
    blocks.push({ language: match[1] ?? '', body: match[2] ?? '' })
  }

  return blocks
}

export function parseRemotionLabMarkdown(
  markdown: string,
  sourceFile: string,
): RemotionLabCase {
  const slug = readFrontmatterValue(markdown, 'slug')
  const title = readFrontmatterValue(markdown, 'title')
  const sourceUrl = readFrontmatterValue(markdown, 'source')
  const lastmod = readFrontmatterValue(markdown, 'lastmod')
  const previewMatch = markdown.match(
    /\[Video\]\((https:\/\/[^)]+preview\.mp4)\)/,
  )
  const thumbnailMatch = markdown.match(
    /\[Poster\]\((https:\/\/[^)]+thumb\.jpg)\)/,
  )
  const blocks = readCodeBlocks(markdown)
  const prompt = blocks.find((block) => block.language === 'text')?.body.trim()
  const code = blocks
    .find((block) => block.body.includes('export const'))
    ?.body.trim()

  if (!previewMatch?.[1]) {
    throw new Error(`Missing preview video URL for ${slug}.`)
  }
  if (!thumbnailMatch?.[1]) {
    throw new Error(`Missing thumbnail URL for ${slug}.`)
  }
  if (!prompt) {
    throw new Error(`Missing prompt block for ${slug}.`)
  }
  if (!code) {
    throw new Error(`Missing code block for ${slug}.`)
  }

  return {
    slug,
    title,
    sourceUrl,
    lastmod,
    sourceFile,
    previewUrl: previewMatch[1],
    thumbnailUrl: thumbnailMatch[1],
    prompt,
    code,
  }
}
