# Countdown Firework

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/countdown-firework/02a4b7f610bc-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/countdown-firework.

## Usage

Copy `src/CountdownFirework.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CountdownFirework, countdownFireworkDefaultProps } from './CountdownFirework'

export function RemotionRoot() {
  return (
    <Composition
      id="CountdownFirework"
      component={CountdownFirework}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={countdownFireworkDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `phaseFrames` | `number` | `40` | Duration in frames for each number. |
| `particleCount` | `number` | `40` | Number of explosion particles per firework. |
| `particleColors` | `array` | `["#ff4d4d","#ff9500","#ffdd00","#44ff88","#00cfff","#a855f7","#ff69b4","#ffffff"]` | Colors of firework particles. |
| `numbers` | `array` | `["3","2","1","GO!"]` | List of numbers to count down. |
| `bgColors` | `array` | `["#0a0a1a","#0a0a1a","#0a0a1a","#ff4d00"]` | Background color per countdown phase. |
| `digitColors` | `array` | `["#ffdd00","#ff9500","#ff4d4d","#ffffff"]` | Text and shockwave colors per countdown phase. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的烟火倒数计时器组件（文件：CountdownFirework.tsx），请帮我做以下调整： 1. 把倒数序列从「3-2-1-GO!」改成「___」（修改 numbers 阵列） 2. 把 GO! 背景爆炸色从橘红 #ff4d00 改成「___」 3. 把粒子数量从 40 改成「___」（修改 PARTICLE-COUNT 常数） 4. 把数字弹出速度调整：stiffness 从 300 改大可更有冲击力，改小更柔和 5. 把数字颜色阵列中的黄/橘/红/白改成「___」 请保留 spring 弹出缩小动画、SVG 粒子散射与冲击波环逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/countdown-firework
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/countdown-firework

## License

MIT
