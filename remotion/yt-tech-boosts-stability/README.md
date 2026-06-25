# 产品稳定度可以透过提升技术力增加 (Yt Tech Boosts Stability)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-tech-boosts-stability). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-tech-boosts-stability/dfa9ab423f39-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-tech-boosts-stability.

## Usage

Copy `src/YtTechBoostsStability.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTechBoostsStability, ytTechBoostsStabilityDefaultProps } from './YtTechBoostsStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTechBoostsStability"
      component={YtTechBoostsStability}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTechBoostsStabilityDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene196-TechBoostsStability.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整技术能力的项目列表 3. 更改上升箭头的颜色 4. 修改稳定度指标的标签 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-tech-boosts-stability
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-tech-boosts-stability

## License

MIT
