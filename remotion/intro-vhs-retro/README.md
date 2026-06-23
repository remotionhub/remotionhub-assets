# Intro Vhs Retro

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-vhs-retro/d4edd597ef32-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-vhs-retro.

## Usage

Copy `src/IntroVhsRetro.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroVhsRetro, introVhsRetroDefaultProps } from './IntroVhsRetro'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroVhsRetro"
      component={IntroVhsRetro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introVhsRetroDefaultProps}
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
我有一个用 Remotion 写的 VHS 复古片头组件（文件：VhsRetroIntro.tsx），请帮我做以下调整： 1. 把主标题从 `YOUR CHANNEL` 改成「___」 2. 把副标题从 `Est. 2024 · Video Production` 改成「___」 3. 把主标题字型大小从 80 改成「___」 4. 把扫描线透明度从 `rgba(0,0,0,0.15)` 改成「___」 5. 把 REC 红点颜色从 `#ff2222` 改成「___」 6. 把背景色从 `#0a0a0a` 改成「___」 请保留原本的抖动、扫描线与 RGB 色差动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-vhs-retro
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-vhs-retro

## License

MIT
