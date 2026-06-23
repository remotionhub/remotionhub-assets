# 先想通路再做产品 (Yt Distribution First)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-distribution-first). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-distribution-first/c3a4da3ae82d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-distribution-first.

## Usage

Copy `src/YtDistributionFirst.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtDistributionFirst, ytDistributionFirstDefaultProps } from './YtDistributionFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionFirst"
      component={YtDistributionFirst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionFirstDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene145-DistributionFirst.tsx），请帮我做以下调整： 1. 修改两个方块的标签（目前是「Build」和「Distribution」） 2. 调整方块颜色（Build 目前是 #4DA3FF 蓝色，Distribution 是 #10B981 绿色） 3. 更换灰色产品的数量（目前是 18 个） 4. 调整灯泡出现的时间（目前是 frame 125） 请保留原本的方块弹入、金星被埋没、互换动画与灯泡闪烁效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-distribution-first
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-distribution-first

## License

MIT
