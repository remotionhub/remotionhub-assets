# Transition Ink Spread

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-ink-spread/63f68ac5b2a5-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-ink-spread.

## Usage

Copy `src/TransitionInkSpread.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionInkSpread, transitionInkSpreadDefaultProps } from './TransitionInkSpread'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionInkSpread"
      component={TransitionInkSpread}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionInkSpreadDefaultProps}
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
我有一个用 Remotion 写的墨水晕染转场组件（文件：InkSpreadTransition.tsx），请帮我做以下调整： 1. 把墨水扩散的起始帧从 15 改成「___」 2. 把墨水扩散的峰值帧从 50 改成「___」 3. 把墨水完全消退的结束帧从 75 改成「___」 4. 把墨水最大缩放倍率（峰值）从 3 改成「___」 5. 把墨水颜色从 `#000000` 改成「___」（例如 `#1a1a2e` 以配合深色主题） 6. 把墨水的模糊半径从 30px 改成「___」px（值越大边缘越柔和） 7. 把 Scene B 淡入的起始帧从 50 改成「___」、结束帧从 75 改成「___」 请保留原本的圆形缩放晕染逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-ink-spread
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-ink-spread

## License

MIT
