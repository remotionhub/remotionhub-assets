# Pencil 工具 Logo 动画介绍 (Yt Pencil Intro)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-pencil-intro). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-pencil-intro/7198f32c3577-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-pencil-intro.

## Usage

Copy `src/YtPencilIntro.tsx` into your Remotion project and register it in your composition root. Also copy `src/runtime-assets.ts` which provides the runtime asset URLs required by this component.

```tsx
import { Composition } from 'remotion'
import { YtPencilIntro, ytPencilIntroDefaultProps } from './YtPencilIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPencilIntro"
      component={YtPencilIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPencilIntroDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：PencilIntroScene.tsx），请帮我做以下调整： 1. 将白色卡片的图片来源从 `pencil-logo.jpeg` 改成其他静态图片（例如我的品牌 Logo） 2. 调整卡片尺寸（目前是 200×200）与圆角大小（目前是 32px） 3. 修改 sparkle 的颜色与数量（目前使用 accent 色，共 4 个） 4. 调整光晕强度（glowOp 的基准值目前为 0.12） 请保留原本的 spring 弹跳动画与闪光特效，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-pencil-intro
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-pencil-intro

## License

MIT
