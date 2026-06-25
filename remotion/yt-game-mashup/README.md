# 三款游戏机制大融合 (Yt Game Mashup)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-game-mashup). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-game-mashup/2857bef522d6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-game-mashup.

## Usage

Copy `src/YtGameMashup.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtGameMashup, ytGameMashupDefaultProps } from './YtGameMashup'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGameMashup"
      component={YtGameMashup}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGameMashupDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene23-GameMashup.tsx），请帮我做以下调整： 1. 修改三个游戏来源的名称与副标（目前是：小朋友上楼梯/派对游戏/玛利欧赛车） 2. 更改各游戏卡片的主色（目前分别是 #2ECC71、#FFB547、#FF6B6B） 3. 调整最终结果的文字（目前是「我的全新游戏」） 4. 修改卡片背景渐层色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-game-mashup
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-game-mashup

## License

MIT
