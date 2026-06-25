# 游戏引擎六大能力展示 (Yt Engine Abilities)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-engine-abilities). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-engine-abilities/9d515d5803a5-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-engine-abilities.

## Usage

Copy `src/YtEngineAbilities.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtEngineAbilities, ytEngineAbilitiesDefaultProps } from './YtEngineAbilities'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineAbilities"
      component={YtEngineAbilities}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineAbilitiesDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene03-EngineAbilities.tsx），请帮我做以下调整： 1. 修改六张卡片的标签文字（目前是：会跑、会跳、会打人、按键反应、碰撞侦测、画面更新） 2. 调整卡片背景色与 SVG 图标的主色（目前使用 #00D4AA、#FFB547、#FF6B6B、#4DA3FF） 3. 更改整体背景渐层（目前是深蓝黑色 linear-gradient(135deg, #0A0E14, #131A24)） 4. 调整每张卡片的弹入延迟时间（目前第一排从 frame 28/53/78 开始，第二排从 108/133/158 开始） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-engine-abilities
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-engine-abilities

## License

MIT
