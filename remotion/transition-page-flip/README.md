# Transition Page Flip

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-page-flip/3f1db4745fee-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-page-flip.

## Usage

Copy `src/TransitionPageFlip.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionPageFlip, transitionPageFlipDefaultProps } from './TransitionPageFlip'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionPageFlip"
      component={TransitionPageFlip}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionPageFlipDefaultProps}
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
我有一个用 Remotion 写的翻页转场组件（文件：PageFlipTransition.tsx），请帮我做以下调整： 1. 把动画起始延迟从 20 改成「___」（`frame - 20` 中的延迟量） 2. 把 spring 的 damping 从 22 改成「___」 3. 把 spring 的 stiffness 从 90 改成「___」 4. 把 perspective 景深从 1200px 改成「___」px（值越小 3D 效果越夸张） 5. 把翻转轴从水平中心改为左侧边缘（`transformOrigin` 从 `"center center"` 改成 `"left center"`） 6. 把 Scene A 的背景改成「___」、Scene B 的背景改成「___」 请保留原本的 3D rotateY 翻页逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-page-flip
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-page-flip

## License

MIT
