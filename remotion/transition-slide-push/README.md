# Transition Slide Push

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-slide-push/061297e07faa-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-slide-push.

## Usage

Copy `src/TransitionSlidePush.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionSlidePush, transitionSlidePushDefaultProps } from './TransitionSlidePush'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSlidePush"
      component={TransitionSlidePush}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSlidePushDefaultProps}
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
我有一个用 Remotion 写的滑动推移转场组件（文件：SlidePushTransition.tsx），请帮我做以下调整： 1. 把动画的起始帧从 20 改成「___」（`frame - 20` 中的延迟量） 2. 把 spring 的 damping 从 20 改成「___」；想更有弹性请改小（例如 10），想更平稳请改大（例如 30） 3. 把 spring 的 stiffness 从 120 改成「___」；想更快请改大（例如 180），想更慢请改小（例如 80） 4. 把推移方向改为从左到右（目前是从右到左），请将 `aTranslateX` 与 `bTranslateX` 的正负号对调 5. 把 Scene A 的背景渐层改成「___」 6. 把 Scene B 的背景渐层改成「___」 请保留原本的滑动推移逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-slide-push
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-slide-push

## License

MIT
