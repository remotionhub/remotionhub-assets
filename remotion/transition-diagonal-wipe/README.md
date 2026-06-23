# Transition Diagonal Wipe

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-diagonal-wipe/2c0ba6e4fe2e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-diagonal-wipe.

## Usage

Copy `src/TransitionDiagonalWipe.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionDiagonalWipe, transitionDiagonalWipeDefaultProps } from './TransitionDiagonalWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionDiagonalWipe"
      component={TransitionDiagonalWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionDiagonalWipeDefaultProps}
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
我有一个用 Remotion 写的对角线擦除转场组件（文件：DiagonalWipeTransition.tsx），请帮我做以下调整： 1. 把转场进度的起始帧从 15 改成「___」 2. 把转场进度的结束帧从 75 改成「___」 3. 把对角线带状边缘的倾斜宽度从 500 改成「___」（clipPath 中的偏移量） 4. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 5. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的对角线擦除逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-diagonal-wipe
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-diagonal-wipe

## License

MIT
