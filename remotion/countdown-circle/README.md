# Countdown Circle

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/countdown-circle/427d6e1a934d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/countdown-circle.

## Usage

Copy `src/CountdownCircle.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CountdownCircle, countdownCircleDefaultProps } from './CountdownCircle'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownCircle"
      component={CountdownCircle}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownCircleDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `totalSeconds` | `number` | `10` | Total countdown seconds. |
| `radius` | `number` | `200` | Radius of the circle. |
| `strokeWidth` | `number` | `20` | Stroke width of the circle. |
| `mainColor` | `string` | `#22d3ee` | Main color of the circle and number. |
| `warningSeconds` | `number` | `3` | Warning seconds threshold. |
| `warningColor` | `string` | `#ef4444` | Color during warning seconds. |
| `completeText` | `string` | `完成！` | Text displayed when countdown completes. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的圆形进度倒计时器组件（文件：CountdownCircle.tsx），请帮我做以下调整： 1. 把倒计时秒数从 10 改成「___」秒（修改顶部 TOTAL-SECONDS 常数） 2. 把主色从青色 #22d3ee 改成「___」 3. 把最后 N 秒警示触发时间从 3 改成「___」秒（修改 isLast3 判断） 4. 把警示颜色从红色 #ef4444 改成「___」 5. 把完成文字从「完成！」改成「___」 请保留圆弧 stroke-dashoffset 动画逻辑与抖动效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/countdown-circle
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/countdown-circle

## License

MIT
