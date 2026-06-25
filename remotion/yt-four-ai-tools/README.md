# 四个 AI 工具大揭露 (Yt Four Ai Tools)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-four-ai-tools). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-four-ai-tools/a72605b1e3f8-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-four-ai-tools.

## Usage

Copy `src/YtFourAiTools.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFourAiTools, ytFourAiToolsDefaultProps } from './YtFourAiTools'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFourAiTools"
      component={YtFourAiTools}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFourAiToolsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene35-FourToolsReveal.tsx），请帮我做以下调整： 1. 修改四个工具的名称、描述与颜色（目前是 Banana 2、Grok、Suno、Blender，对应颜色 #00D4AA、#FFB547、#2ECC71、#9B59B6） 2. 调整每张卡片的出现延迟（目前依序为 frame 30, 75, 120, 165） 3. 更改卡片尺寸（目前宽 570，高 300） 4. 修改卡片的圆角半径（目前 borderRadius: 28） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-four-ai-tools
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-four-ai-tools

## License

MIT
