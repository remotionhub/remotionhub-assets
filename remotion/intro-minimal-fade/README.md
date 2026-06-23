# Intro Minimal Fade

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-minimal-fade/db0c61d5e293-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-minimal-fade.

## Usage

Copy `src/IntroMinimalFade.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroMinimalFade, introMinimalFadeDefaultProps } from './IntroMinimalFade'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroMinimalFade"
      component={IntroMinimalFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introMinimalFadeDefaultProps}
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
我有一个用 Remotion 写的极简淡入片头组件（文件：MinimalFadeIntro.tsx），请帮我做以下调整： 1. 把 Logo 文字从 `YOUR LOGO` 改成「___」 2. 把主标题从 `Main Title Here` 改成「___」 3. 把副标题从 `Subtitle goes here` 改成「___」 4. 把主标题字型大小从 72 改成「___」 5. 把副标题颜色从 `#888888` 改成「___」 6. 把背景颜色从 `#000000` 改成「___」 请保留原本的淡入动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-minimal-fade
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-minimal-fade

## License

MIT
