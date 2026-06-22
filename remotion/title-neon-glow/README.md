# Title Neon Glow

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-neon-glow/19e0b8fe137e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-neon-glow.

## Usage

Copy `src/TitleNeonGlow.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleNeonGlow, titleNeonGlowDefaultProps } from './TitleNeonGlow'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleNeonGlow"
      component={TitleNeonGlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleNeonGlowDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `NEON GLOW` | The text content to display. |
| `textColor` | `string` | `#f5d0fe` | CSS color of the text. |
| `backgroundColor` | `string` | `#050008` | CSS color of the background. |
| `glowColor1` | `string` | `#f0abfc` | CSS color for the mid neon glow layer. |
| `glowColor2` | `string` | `#d946ef` | CSS color for the outer neon glow layer. |
| `fontSize` | `number` | `100` | Font size of the text. |
| `flickerEndFrame` | `number` | `45` | Frame when flicker ends and stable glow begins. |
| `glowFullFrame` | `number` | `95` | Frame when the neon glow reaches full intensity. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的霓虹发光字卡组件（文件：NeonGlowTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "NEON GLOW" 改成「___」 2. 把发光颜色从紫色系（#f0abfc、#d946ef）改成「___」色系（请自行选配两个深浅色） 3. 把文字颜色从淡紫 #f5d0fe 改成「___」 4. 把字体从等宽字型 Courier New 改成「___」（例如：sans-serif、serif、Impact） 5. 把背景色从极深紫 #050008 改成「___」 6. 把闪烁结束时间从第 45 帧改成第 ___ 帧（数字越大，闪烁越久） 请保留原本的闪烁 → 稳定亮起的效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-neon-glow
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-neon-glow

## License

MIT
