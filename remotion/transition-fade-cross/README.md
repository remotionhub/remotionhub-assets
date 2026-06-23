# Transition Fade Cross

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-fade-cross/6322548392fb-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-fade-cross.

## Usage

Copy `src/TransitionFadeCross.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionFadeCross, transitionFadeCrossDefaultProps } from './TransitionFadeCross'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFadeCross"
      component={TransitionFadeCross}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFadeCrossDefaultProps}
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
我有一个用 Remotion 写的交叉淡化转场组件（文件：FadeCrossTransition.tsx），请帮我做以下调整： 1. 把淡化的起始帧从 30 改成「___」 2. 把淡化的结束帧从 60 改成「___」 3. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 4. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 5. 把 Scene A 文字的阴影颜色从 `rgba(59,130,246,0.5)` 改成「___」 6. 把 Scene B 文字的阴影颜色从 `rgba(168,85,247,0.5)` 改成「___」 请保留原本的交叉淡化逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-fade-cross
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-fade-cross

## License

MIT
