# AI 看图不理解语意的视觉解说 (Yt Ai Not Understand)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-not-understand). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-not-understand/76db1da1bc14-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-not-understand.

## Usage

Copy `src/YtAiNotUnderstand.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiNotUnderstand, ytAiNotUnderstandDefaultProps } from './YtAiNotUnderstand'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiNotUnderstand"
      component={YtAiNotUnderstand}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiNotUnderstandDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：NotUnderstandScene.tsx），请帮我做以下调整： 1. 修改顶部说明文字（AnimatedTitle 中的 text 字符串） 2. 调整机器人与图像图标的出现时间（ROBOT-DELAY、IMAGE-DELAY，目前为第 60、90 帧） 3. 修改底部副标题文字（目前为「它看到的是像素，不是语意」） 4. 调整散落问号的数量与位置（scatterPositions 阵列） 请保留逐字动画与流光连线效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-not-understand
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-not-understand

## License

MIT
