# AI 设计工具三大使用情境动态图解 (Yt Ai Use Cases)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-use-cases). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-use-cases/b9723cbdb925-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-use-cases.

## Usage

Copy `src/YtAiUseCases.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiUseCases, ytAiUseCasesDefaultProps } from './YtAiUseCases'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiUseCases"
      component={YtAiUseCases}
      durationInFrames={530}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiUseCasesDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：TypewriterScene.tsx），请帮我做以下调整： 1. 修改三个情境的说明文字（items 阵列中的 lines 栏位） 2. 调整三个阶段的出现时间点（P1、P2、P3，目前分别为第 2、12、17 秒） 3. 替换 SVG 图标（LayoutIcon、RestyleIcon、ImageToUiIcon）为其他几何图形 4. 修改文字颜色，让主标（第一行）使用不同于 dimmed 的颜色 请保留原本的图标收拢动画与文字滑入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-use-cases
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-use-cases

## License

MIT
