# 用户不转模型，做动画就可以 (Yt Animation Suffice)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-animation-suffice). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-animation-suffice/26bab50553a2-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-animation-suffice.

## Usage

Copy `src/YtAnimationSuffice.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAnimationSuffice, ytAnimationSufficeDefaultProps } from './YtAnimationSuffice'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAnimationSuffice"
      component={YtAnimationSuffice}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAnimationSufficeDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene66-AnimationSuffice.tsx），请帮我做以下调整： 1. 修改第一阶段的说明文字（目前是「用户不会转动模型」） 2. 更改第三阶段的徽章文字（目前是「做动画就可以」） 3. 调整播放器内动画球体的颜色（目前使用 accent #00D4AA） 4. 修改禁止图标的颜色（目前使用 danger #FF6B6B） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-animation-suffice
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-animation-suffice

## License

MIT
