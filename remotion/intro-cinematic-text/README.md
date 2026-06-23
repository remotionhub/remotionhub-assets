# Intro Cinematic Text

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-cinematic-text/ede91a906541-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-cinematic-text.

## Usage

Copy `src/IntroCinematicText.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroCinematicText, introCinematicTextDefaultProps } from './IntroCinematicText'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCinematicText"
      component={IntroCinematicText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCinematicTextDefaultProps}
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
我有一个用 Remotion 写的电影感字幕片头组件（文件：CinematicTextIntro.tsx），请帮我做以下调整： 1. 把第一行小字从 `A FILM BY REMOTION` 改成「___」 2. 把大字标题从 `The Story Begins` 改成「___」 3. 把第三行小字从 `COMING SOON` 改成「___」 4. 把大字标题字型大小从 64 改成「___」 5. 把第三行小字颜色从 `#888888` 改成「___」 6. 把细线长度从 120 改成「___」 请保留原本的依序淡入动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-cinematic-text
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-cinematic-text

## License

MIT
