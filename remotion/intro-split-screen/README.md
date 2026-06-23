# Intro Split Screen

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-split-screen/bda8fca3e26a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-split-screen.

## Usage

Copy `src/IntroSplitScreen.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroSplitScreen, introSplitScreenDefaultProps } from './IntroSplitScreen'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroSplitScreen"
      component={IntroSplitScreen}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introSplitScreenDefaultProps}
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
我有一个用 Remotion 写的分割萤幕片头组件（文件：SplitScreenIntro.tsx），请帮我做以下调整： 1. 把左格副标题从 `Subtitle Text` 改成「___」 2. 把右格主标题从 `Main Title` 改成「___」 3. 把右格下方副标题从 `Additional Subtitle` 改成「___」 4. 把左格背景色从 `#1e293b` 改成「___」 5. 把右格背景色从 `#0f172a` 改成「___」 6. 把中央分隔线颜色从 `#3b82f6` 改成「___」 请保留原本的弹性滑入动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-split-screen
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-split-screen

## License

MIT
