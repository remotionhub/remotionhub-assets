# Countdown Blast

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/countdown-blast/9fbb6bfe2484-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/countdown-blast.

## Usage

Copy `src/CountdownBlast.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CountdownBlast, countdownBlastDefaultProps } from './CountdownBlast'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownBlast"
      component={CountdownBlast}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownBlastDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `phaseFrames` | `number` | `28` | Duration in frames for each phase. |
| `phases` | `array` | `["5","4","3","2","1","GO!"]` | List of strings for each phase. |
| `rayCount` | `number` | `12` | Number of energy rays. |
| `phaseColors` | `array` | `["#00e5ff","#00cfb4","#7fff00","#ffcc00","#ff6600","#ff2020"]` | Colors corresponding to each phase. |
| `bgColors` | `array` | `["#00060f","#001208","#040f00","#0f0a00","#0f0400","#0f0000"]` | Background colors corresponding to each phase. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的爆炸式倒计时器组件（文件：CountdownBlast.tsx），请帮我做以下调整： 1. 把倒计时序列从「5-4-3-2-1-GO!」改成「___」（修改 PHASES 数组） 2. 把每个阶段的主色数组从现有颜色改成「___」（修改 PHASE-COLORS 数组，需与 PHASES 长度相同） 3. 把能量射线数量从 12 改成「___」（修改 RAY-COUNT 常数） 4. 把每个数字停留帧数从 28 改成「___」（修改 PHASE-FRAMES 常数） 5. 数字冲击弹出力度调整：stiffness 从 400 改大更冲，改小更柔 请保留能量射线、冲击波环与 GO! 放射线展开逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/countdown-blast
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/countdown-blast

## License

MIT
