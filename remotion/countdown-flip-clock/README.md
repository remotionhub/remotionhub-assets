# Countdown Flip Clock

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/countdown-flip-clock/d73bb9cec5a8-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/countdown-flip-clock.

## Usage

Copy `src/CountdownFlipClock.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CountdownFlipClock, countdownFlipClockDefaultProps } from './CountdownFlipClock'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownFlipClock"
      component={CountdownFlipClock}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFlipClockDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `totalSeconds` | `number` | `60` | Total countdown seconds. |
| `title` | `string` | `倒计时` | Header title label. |
| `cardBgColor` | `string` | `#1a1a2e` | Background color of the top half card. |
| `cardTextColor` | `string` | `#f5f5f0` | Color of the text/numbers on the cards. |
| `cardBottomBgColor` | `string` | `#16213e` | Background color of the bottom half card. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的翻页时钟倒计时器组件（文件：CountdownFlipClock.tsx），请帮我做以下调整： 1. 把倒计时总秒数从 60 改成「___」秒（修改顶部 TOTAL-SECONDS 常数） 2. 把牌面背景色从深蓝 #1a1a2e 改成「___」 3. 把冒号闪烁点颜色从靛蓝 #6366f1 改成「___」 4. 把标题文字从「倒计时」改成「___」 5. 翻页速度调整：想更快请把 flipDuration 的 0.4 改小（例如 0.25）；想更慢改大 请保留 perspective rotateX 翻页动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/countdown-flip-clock
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/countdown-flip-clock

## License

MIT
