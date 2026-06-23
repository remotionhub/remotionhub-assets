# Transition Diamond Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-diamond-reveal/cf5c0703126e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-diamond-reveal.

## Usage

Copy `src/TransitionDiamondReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionDiamondReveal, transitionDiamondRevealDefaultProps } from './TransitionDiamondReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionDiamondReveal"
      component={TransitionDiamondReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionDiamondRevealDefaultProps}
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
我有一个用 Remotion 写的菱形展开转场组件（文件：DiamondRevealTransition.tsx），请帮我做以下调整： 1. 把栏数从 11 改成「___」 2. 把列数从 6 改成「___」 3. 把菱形大小从 180 改成「___」（单位 px） 4. 把每个菱形的延迟系数从 `(col + row) * 3` 改成「___」 5. 把菱形缩小的持续帧数从 25 改成「___」 6. 把菱形色块的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 7. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的菱形展开逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-diamond-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-diamond-reveal

## License

MIT
