# Transition Curtain

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-curtain/b3fdbb9b32d1-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-curtain.

## Usage

Copy `src/TransitionCurtain.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionCurtain, transitionCurtainDefaultProps } from './TransitionCurtain'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionCurtain"
      component={TransitionCurtain}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionCurtainDefaultProps}
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
我有一个用 Remotion 写的幕帘转场组件（文件：CurtainTransition.tsx），请帮我做以下调整： 1. 把左右门开始移动的帧从 20 改成「___」 2. 把左右门移动完成的帧从 70 改成「___」 3. 把左门移动距离从 -960 改成「___」（单位 px） 4. 把右门移动距离从 960 改成「___」（单位 px） 5. 把 Scene A 的背景渐层从 `linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)` 改成「___」 6. 把 Scene B 的背景渐层从 `linear-gradient(135deg, #1a0533 0%, #0f0a1a 100%)` 改成「___」 请保留原本的幕帘逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-curtain
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-curtain

## License

MIT
