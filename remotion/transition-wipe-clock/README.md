# Transition Wipe Clock

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-wipe-clock/29ee43e730dd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-wipe-clock.

## Usage

Copy `src/TransitionWipeClock.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionWipeClock, transitionWipeClockDefaultProps } from './TransitionWipeClock'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionWipeClock"
      component={TransitionWipeClock}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionWipeClockDefaultProps}
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
我有一个用 Remotion 写的时钟擦除转场组件（文件：WipeClockTransition.tsx），请帮我做以下调整： 1. 把动画起始帧从 15 改成「___」 2. 把动画结束帧从 75 改成「___」 3. 把擦除方向从「由左向右」改为「由右向左」（调整 `clipPath` 的 `inset` 方向） 4. 把 Scene A 的背景渐层改成「___」 5. 把 Scene B 的背景渐层改成「___」 请保留原本的擦除遮罩逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-wipe-clock
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-wipe-clock

## License

MIT
