# Transition Pixelate

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-pixelate/bdaa40a64314-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-pixelate.

## Usage

Copy `src/TransitionPixelate.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionPixelate, transitionPixelateDefaultProps } from './TransitionPixelate'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionPixelate"
      component={TransitionPixelate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionPixelateDefaultProps}
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
我有一个用 Remotion 写的像素化转场组件（文件：PixelateTransition.tsx），请帮我做以下调整： 1. 把动画起始帧从 20 改成「___」 2. 把动画结束帧从 60 改成「___」 3. 把模糊峰值发生的中间帧从 40 改成「___」 4. 把最大模糊半径从 24 改成「___」px（值越大模糊越强烈） 5. 把 Scene A 的背景改成「___」 6. 把 Scene B 的背景改成「___」 请保留原本的模糊淡化逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-pixelate
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-pixelate

## License

MIT
