# Transition Morph Circle

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-morph-circle/ecb0bc36ccdd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-morph-circle.

## Usage

Copy `src/TransitionMorphCircle.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionMorphCircle, transitionMorphCircleDefaultProps } from './TransitionMorphCircle'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionMorphCircle"
      component={TransitionMorphCircle}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionMorphCircleDefaultProps}
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
我有一个用 Remotion 写的圆形遮罩转场组件（文件：MorphCircleTransition.tsx），请帮我做以下调整： 1. 把动画起始延迟从 20 改成「___」（`frame - 20` 中的延迟量） 2. 把 spring 的 damping 从 20 改成「___」 3. 把 spring 的 stiffness 从 80 改成「___」；想更快请改大（例如 120），想更慢请改小（例如 50） 4. 把圆形扩张的最终半径从 1200 改成「___」px 5. 把圆形展开的中心点从画面中心 `960px 540px` 改成「___ ___」 6. 把 Scene A 的背景改成「___」、Scene B 的背景改成「___」 请保留原本的圆形 clipPath 遮罩逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-morph-circle
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-morph-circle

## License

MIT
