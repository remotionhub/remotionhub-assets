# Intro Cinematic Bars

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-cinematic-bars/b359274751af-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-cinematic-bars.

## Usage

Copy `src/IntroCinematicBars.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroCinematicBars, introCinematicBarsDefaultProps } from './IntroCinematicBars'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCinematicBars"
      component={IntroCinematicBars}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCinematicBarsDefaultProps}
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
我有一个用 Remotion 写的电影感黑边片头组件（文件：CinematicBarsIntro.tsx），请帮我做以下调整： 1. 把黑边高度从 216px 改成「___」 2. 把主标题从 `Cinematic Title` 改成「___」 3. 把副标题从 `A Film by Your Name` 改成「___」 4. 把主标题字型大小从 72 改成「___」 5. 把背景渐层从 `linear-gradient(180deg, #111111 0%, #1a1a2e 100%)` 改成「___」 6. 把黑边进场结束帧从 40 改成「___」 请保留原本的黑边动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-cinematic-bars
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-cinematic-bars

## License

MIT
