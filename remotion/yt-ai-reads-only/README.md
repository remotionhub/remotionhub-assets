# AI 只能读取线条、颜色、文字 (Yt Ai Reads Only)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-reads-only). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-reads-only/53210e9e896d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-reads-only.

## Usage

Copy `src/YtAiReadsOnly.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiReadsOnly, ytAiReadsOnlyDefaultProps } from './YtAiReadsOnly'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReadsOnly"
      component={YtAiReadsOnly}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReadsOnlyDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene47-AiReadsOnly.tsx），请帮我做以下调整： 1. 修改三个元素的标签（目前是：线条、颜色、文字） 2. 调整各元素图标的主色（目前依序使用 accent #00D4AA、warning #FFB547、accentSecondary #4DA3FF） 3. 更改标题文字（目前是「AI 只能读取」） 4. 修改扫描线颜色与速度 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-reads-only
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-reads-only

## License

MIT
