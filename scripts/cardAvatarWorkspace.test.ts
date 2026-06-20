import fs from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'

const workspaceDir = path.resolve(process.cwd(), 'remotion/card-avatar')

describe('card-avatar workspace', () => {
  it('contains the required workspace files and manifest schema', () => {
    const requiredFiles = [
      'package.json',
      'remotion.config.ts',
      'src/CardAvatar.tsx',
      'src/Root.tsx',
      'src/index.ts',
      'LICENSE',
    ]

    for (const relativePath of requiredFiles) {
      expect(
        fs.existsSync(path.join(workspaceDir, relativePath)),
        `${relativePath} should exist`,
      ).toBe(true)
    }

    const manifest = JSON.parse(
      fs.readFileSync(
        path.join(workspaceDir, 'remotionhub.asset.json'),
        'utf8',
      ),
    )

    expect(manifest.entryPoint).toBe('src/CardAvatar.tsx')
    expect(manifest.compositionId).toBe('CardAvatar')
    expect(manifest.propsSchema).toEqual([
      {
        name: 'name',
        type: 'string',
        defaultValue: 'Jane Smith',
        description: 'Primary display name.',
      },
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Creative Director',
        description: 'Secondary role or title.',
      },
      {
        name: 'avatarBorderColor',
        type: 'string',
        defaultValue: '#a78bfa',
        description: 'CSS color for the avatar border.',
      },
      {
        name: 'avatarBackgroundColor',
        type: 'string',
        defaultValue: '#312e81',
        description: 'CSS color for the avatar circle background.',
      },
      {
        name: 'avatarTextColor',
        type: 'string',
        defaultValue: '#a78bfa',
        description: 'CSS color for the avatar initials.',
      },
      {
        name: 'titleColor',
        type: 'string',
        defaultValue: '#c4b5fd',
        description: 'CSS color for the title text.',
      },
      {
        name: 'avatarStiffness',
        type: 'number',
        defaultValue: 160,
        description: 'Spring stiffness for the avatar pop-in animation.',
      },
    ])
    expect(manifest.extraDependencies).toEqual([])
  })
})
