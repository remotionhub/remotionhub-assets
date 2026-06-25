# 角色动作动画四格展示 (Yt Char Animations)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-char-animations). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-char-animations/a72605b1e3f8-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-char-animations.

## Usage

Copy `src/YtCharAnimations.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCharAnimations, ytCharAnimationsDefaultProps } from './YtCharAnimations'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCharAnimations"
      component={YtCharAnimations}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCharAnimationsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene38-CharAnimations.tsx），请帮我做以下调整： 1. 修改四种动作的标签（目前是：走路、跑步、跳跃、攻击） 2. 调整各动作对应的颜色（目前依序是 #4DA3FF、#FFB547、#2ECC71、#E74C3C） 3. 更改动作卡片的大小（目前每张宽高各 200px） 4. 修改动作出现的延迟时间（目前依序为 frame 30, 75, 120, 160） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-char-animations
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-char-animations

## License

MIT
