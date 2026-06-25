# shadcn-ui Skill Prompt 输入动画 (Yt Shadcn Prompt)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-shadcn-prompt). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-shadcn-prompt/e443264004c9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-shadcn-prompt.

## Usage

Copy `src/YtShadcnPrompt.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtShadcnPrompt, ytShadcnPromptDefaultProps } from './YtShadcnPrompt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnPrompt"
      component={YtShadcnPrompt}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnPromptDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene53-ShadcnPrompt.tsx），请帮我做以下调整： 1. 修改 Prompt 的两行文字（目前是「请利用 shadcn-ui skill」和「帮我重新设计这个网站」） 2. 更改高亮关键词（目前高亮的是「shadcn-ui skill」） 3. 调整打字速度（目前从 frame 30 到 105 完成打字） 4. 修改传送按钮的渐层色（目前从 accent 到 accentSecondary） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-shadcn-prompt
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-shadcn-prompt

## License

MIT
