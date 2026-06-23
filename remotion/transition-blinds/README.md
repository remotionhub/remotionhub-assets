# Transition Blinds

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-blinds/93f54d62d7b4-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-blinds.

## Usage

Copy `src/TransitionBlinds.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionBlinds, transitionBlindsDefaultProps } from './TransitionBlinds'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionBlinds"
      component={TransitionBlinds}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionBlindsDefaultProps}
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
我有一个用 Remotion 写的百叶窗转场组件（文件：BlindsTransition.tsx），请帮我做以下调整： 1. 把百叶窗条纹数量从 8 改成「___」 2. 把每条条纹的收缩起始帧偏移从 `i * 8` 改成「___」 3. 把条纹收缩的开始帧（相对偏移后）从 15 改成「___」 4. 把条纹收缩的结束帧（相对偏移后）从 45 改成「___」 5. 把 Scene A（条纹）的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 6. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的百叶窗逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-blinds
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-blinds

## License

MIT
