# Intro Countdown 3

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-countdown-3/c33ac99079ce-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-countdown-3.

## Usage

Copy `src/IntroCountdown3.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroCountdown3, introCountdown3DefaultProps } from './IntroCountdown3'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCountdown3"
      component={IntroCountdown3}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCountdown3DefaultProps}
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
我有一个用 Remotion 写的三秒倒数片头组件（文件：Countdown3Intro.tsx），请帮我做以下调整： 1. 把每个数字的持续帧数从 30 改成「___」 2. 把数字 3 的圆环颜色从 `#ef4444` 改成「___」 3. 把数字 2 的圆环颜色从 `#f59e0b` 改成「___」 4. 把数字 1 的圆环颜色从 `#22c55e` 改成「___」 5. 把「GO」的圆环颜色从 `#3b82f6` 改成「___」 6. 把背景颜色从 `#0f172a` 改成「___」 请保留原本的倒数与圆环动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-countdown-3
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-countdown-3

## License

MIT
