# 静态网站能做动画特效吗？ (Yt Can Do Animation)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-can-do-animation). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-can-do-animation/bc762dcc59d1-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-can-do-animation.

## Usage

Copy `src/YtCanDoAnimation.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCanDoAnimation, ytCanDoAnimationDefaultProps } from './YtCanDoAnimation'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCanDoAnimation"
      component={YtCanDoAnimation}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCanDoAnimationDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene58-CanDoAnimation.tsx），请帮我做以下调整： 1. 修改问号前的说明文字（目前是「动画特效」） 2. 更改静态网站的标签文字（目前是「静态网站」） 3. 调整动态网站 mockup 的渐层色（目前是 #8B5CF6 到 #EC4899） 4. 修改问号的颜色（目前使用 warning #FFB547） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-can-do-animation
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-can-do-animation

## License

MIT
