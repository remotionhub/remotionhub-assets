# Intro Typewriter

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-typewriter/11c530efbb21-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-typewriter.

## Usage

Copy `src/IntroTypewriter.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroTypewriter, introTypewriterDefaultProps } from './IntroTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroTypewriter"
      component={IntroTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introTypewriterDefaultProps}
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
我有一个用 Remotion 写的打字机片头组件（文件：TypewriterIntro.tsx），请帮我做以下调整： 1. 把主标题文字从 `YOUR CHANNEL NAME` 改成「___」 2. 把副标题从 `SUBSCRIBE & STAY TUNED` 改成「___」 3. 把每帧打出字元速度从每 4 frames 改成每「___」frames 4. 把主标题字型大小从 90 改成「___」 5. 把副标题颜色从 `#888888` 改成「___」 6. 把背景色从 `#000000` 改成「___」 请保留原本的打字动画与游标闪烁逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-typewriter
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-typewriter

## License

MIT
