# Transition Flash White

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-flash-white/29d88d30dc4f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-flash-white.

## Usage

Copy `src/TransitionFlashWhite.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionFlashWhite, transitionFlashWhiteDefaultProps } from './TransitionFlashWhite'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFlashWhite"
      component={TransitionFlashWhite}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFlashWhiteDefaultProps}
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
我有一个用 Remotion 写的白闪转场组件（文件：FlashWhiteTransition.tsx），请帮我做以下调整： 1. 把闪光淡入的起始帧从 30 改成「___」 2. 把闪光最亮的帧从 45 改成「___」 3. 把闪光淡出的结束帧从 60 改成「___」 4. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 5. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 6. 把白色 overlay 改成其他颜色「___」 请保留原本的白闪逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-flash-white
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-flash-white

## License

MIT
