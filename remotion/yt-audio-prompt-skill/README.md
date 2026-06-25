# AI Prompt 生成 Skill 动画 (Yt Audio Prompt Skill)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-prompt-skill). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-prompt-skill/bdfc15be5012-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-prompt-skill.

## Usage

Copy `src/YtAudioPromptSkill.tsx` into your Remotion project and register it in your composition root. Also copy `src/runtime-assets.ts` which provides the runtime asset URLs required by this component.

```tsx
import { Composition } from 'remotion'
import { YtAudioPromptSkill, ytAudioPromptSkillDefaultProps } from './YtAudioPromptSkill'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioPromptSkill"
      component={YtAudioPromptSkill}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioPromptSkillDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |


## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的场景组件（文件：Scene11-PromptSkill.tsx），请帮我做以下调整： 1. 修改 `WORD-GROUPS` 阵列中的打字文字内容，换成你自己想要展示的 AI Prompt。 2. 调整三个行动图标（`ACTION-ITEMS`）的 label 文字与出现时间点（`appearFrame`）。 3. 更换终端机标题（目前是 "Claude Code"）。 4. 修改 accent 颜色（目前是 `#4DA3FF`）与高亮文字颜色（例如 "sonic pi" 的红色 `#FF6B6B`）。 请保留原本的打字机效果与行动图标连线动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-prompt-skill
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-prompt-skill

## License

MIT
