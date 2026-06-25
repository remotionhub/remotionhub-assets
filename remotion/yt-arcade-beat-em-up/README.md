# 街机清版游戏场景动画 (Yt Arcade Beat Em Up)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-arcade-beat-em-up). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-arcade-beat-em-up/769df2e0af20-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-arcade-beat-em-up.

## Usage

Copy `src/YtArcadeBeatEmUp.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtArcadeBeatEmUp, ytArcadeBeatEmUpDefaultProps } from './YtArcadeBeatEmUp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtArcadeBeatEmUp"
      component={YtArcadeBeatEmUp}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytArcadeBeatEmUpDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene33-ArcadeBeatEmUp.tsx），请帮我做以下调整： 1. 修改敌人数量与位置（目前有 6 个，x 座标分别是 380, 520, 600, 740, 830, 950） 2. 调整主角的移动速度（目前从 frame 50 到 220 横跨整个舞台） 3. 更改主角颜色（目前使用 accent #00D4AA） 4. 修改舞台宽度（目前 stageW = 1100） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-arcade-beat-em-up
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-arcade-beat-em-up

## License

MIT
