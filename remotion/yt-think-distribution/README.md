# 怎么持续触及有痛点的人群 (Yt Think Distribution)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-think-distribution). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-think-distribution/bab7eaebfdc1-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-think-distribution.

## Usage

Copy `src/YtThinkDistribution.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtThinkDistribution, ytThinkDistributionDefaultProps } from './YtThinkDistribution'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThinkDistribution"
      component={YtThinkDistribution}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThinkDistributionDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene221-ThinkDistribution.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整外圈痛点人物的数量与角度 3. 更改放射波的颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-think-distribution
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-think-distribution

## License

MIT
