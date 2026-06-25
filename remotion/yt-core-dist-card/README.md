# 持续触及核心字卡 (Yt Core Dist Card)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-core-dist-card). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-core-dist-card/eea1b76b220d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-core-dist-card.

## Usage

Copy `src/YtCoreDistCard.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCoreDistCard, ytCoreDistCardDefaultProps } from './YtCoreDistCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreDistCard"
      component={YtCoreDistCard}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreDistCardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene143-CoreDistCard.tsx），请帮我做以下调整： 1. 修改第一行文字（目前是「持续地触及到想吃牛肉面的人，」） 2. 调整第二行文字（目前是「让他来吃、再来吃、还带朋友来吃。」） 3. 更换英文副标（目前是 "Continuously reach people who crave beef noodles..."） 4. 调整打字速度（目前 CHARS-PER-FRAME = 0.6） 请保留原本的逐字打字效果、游标闪烁与英文淡入动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-core-dist-card
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-core-dist-card

## License

MIT
