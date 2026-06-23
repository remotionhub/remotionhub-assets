# Transition Zoom Through

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-zoom-through/40e6af606e9d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-zoom-through.

## Usage

Copy `src/TransitionZoomThrough.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionZoomThrough, transitionZoomThroughDefaultProps } from './TransitionZoomThrough'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionZoomThrough"
      component={TransitionZoomThrough}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionZoomThroughDefaultProps}
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
我有一个用 Remotion 写的缩放穿越转场组件（文件：ZoomThroughTransition.tsx），请帮我做以下调整： 1. 把动画区间的起始帧从 20 改成「___」 2. 把动画区间的结束帧从 55 改成「___」 3. 把 Scene A 放大的最终倍率从 3 改成「___」（想更夸张请改大，例如 5） 4. 把 Scene B 缩小的起始倍率从 0.5 改成「___」（想更戏剧化请改小，例如 0.2） 5. 把 Scene A 的背景渐层改成「___」 6. 把 Scene B 的背景渐层改成「___」 请保留原本的缩放穿越逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-zoom-through
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-zoom-through

## License

MIT
