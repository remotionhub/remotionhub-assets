# Transition Spin Zoom

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-spin-zoom/74a8b0757818-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-spin-zoom.

## Usage

Copy `src/TransitionSpinZoom.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionSpinZoom, transitionSpinZoomDefaultProps } from './TransitionSpinZoom'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSpinZoom"
      component={TransitionSpinZoom}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSpinZoomDefaultProps}
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
我有一个用 Remotion 写的旋转缩放转场组件（文件：SpinZoomTransition.tsx），请帮我做以下调整： 1. 把转场进度的起始帧从 15 改成「___」 2. 把转场进度的结束帧从 75 改成「___」 3. 把场景 A 的旋转角度从 180deg 改成「___」 4. 把场景 B 的旋转角度从 -180deg 改成「___」 5. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 6. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的旋转缩放逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-spin-zoom
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-spin-zoom

## License

MIT
