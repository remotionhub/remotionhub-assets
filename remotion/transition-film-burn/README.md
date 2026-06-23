# Transition Film Burn

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-film-burn/41a1706a5c18-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-film-burn.

## Usage

Copy `src/TransitionFilmBurn.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionFilmBurn, transitionFilmBurnDefaultProps } from './TransitionFilmBurn'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFilmBurn"
      component={TransitionFilmBurn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFilmBurnDefaultProps}
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
我有一个用 Remotion 写的底片漏光转场组件（文件：FilmBurnTransition.tsx），请帮我做以下调整： 1. 把场景切换点从 frame 45 改成「___」 2. 把漏光淡入的起始帧从 30 改成「___」 3. 把漏光最强的帧从 45 改成「___」 4. 把漏光淡出的结束帧从 60 改成「___」 5. 把漏光层的放射渐层颜色从 `#ff6b00`、`#ff2200` 改成「___」 6. 把橘色 overlay 的背景色从 `rgba(255,120,0,0.3)` 改成「___」 7. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 8. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的底片漏光逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-film-burn
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-film-burn

## License

MIT
