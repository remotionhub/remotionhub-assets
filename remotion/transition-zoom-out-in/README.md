# Transition Zoom Out In

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-zoom-out-in/f70b838844e3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-zoom-out-in.

## Usage

Copy `src/TransitionZoomOutIn.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionZoomOutIn, transitionZoomOutInDefaultProps } from './TransitionZoomOutIn'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionZoomOutIn"
      component={TransitionZoomOutIn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionZoomOutInDefaultProps}
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
我有一个用 Remotion 写的缩小放大转场组件（文件：ZoomOutInTransition.tsx），请帮我做以下调整： 1. 把场景 A 缩小的起始帧从 15 改成「___」 2. 把场景 A 缩小的结束帧从 50 改成「___」 3. 把场景 B 放大的起始帧从 50 改成「___」 4. 把场景 B 放大的结束帧从 80 改成「___」 5. 把中间的黑色背景从 `black` 改成「___」 6. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 7. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的缩小放大逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-zoom-out-in
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-zoom-out-in

## License

MIT
