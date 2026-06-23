# Intro Logo Morph

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-logo-morph/07ebeede1167-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-logo-morph.

## Usage

Copy `src/IntroLogoMorph.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroLogoMorph, introLogoMorphDefaultProps } from './IntroLogoMorph'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroLogoMorph"
      component={IntroLogoMorph}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introLogoMorphDefaultProps}
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
我有一个用 Remotion 写的 Logo 变形片头组件（文件：LogoMorphIntro.tsx），请帮我做以下调整： 1. 把品牌缩写从 `RC` 改成「___」 2. 把品牌全名从 `Remotion Community` 改成「___」 3. 把副标语从 `繁体中文社群入口网站` 改成「___」 4. 把形状最终颜色从蓝色（`rgb(59, 130, 246)`）改成「___」 5. 把形状最终 border-radius 从 12px 改成「___」 6. 把背景颜色从 `#0f172a` 改成「___」 请保留原本的形状变形与文字进场动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-logo-morph
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-logo-morph

## License

MIT
