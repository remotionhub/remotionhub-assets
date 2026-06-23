# Countdown Digital

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/countdown-digital/2af8cddd4497-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/countdown-digital.

## Usage

Copy `src/CountdownDigital.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CountdownDigital, countdownDigitalDefaultProps } from './CountdownDigital'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownDigital"
      component={CountdownDigital}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownDigitalDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `totalSeconds` | `number` | `10` | Total countdown seconds. |
| `color` | `string` | `#ff2828` | Display segment glow color. |
| `label` | `string` | `COUNTDOWN TIMER` | Header title label. |
| `timeUpLabel` | `string` | `-- TIME UP --` | Footer label when time is up. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的 LED 数位倒计时器组件（文件：CountdownDigital.tsx），请帮我做以下调整： 1. 把倒计时秒数从 10 改成「___」秒（修改顶部 TOTAL-SECONDS 常数） 2. 把 LED 颜色从红色 rgba(255,40,40,...) 改成「___」色（需同步修改 onColor、offColor 及 shadow 中的 RGB 值） 3. 把顶部标签从「COUNTDOWN TIMER」改成「___」 4. 把最后几秒警示阈值从 3 改成「___」秒（修改 isLast3 的判断） 5. 把闪烁频率加快：把 blinkRate 的 0.3 改大可更快，改小可更慢 请保留 7-segment 矩形拼组逻辑与扫描线效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/countdown-digital
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/countdown-digital

## License

MIT
