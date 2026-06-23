# Title Wave Text

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-wave-text/ff53bdfb657e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-wave-text.

## Usage

Copy `src/TitleWaveText.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleWaveText, titleWaveTextDefaultProps } from './TitleWaveText'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleWaveText"
      component={TitleWaveText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleWaveTextDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `MOTION` | The text content to display. |
| `amplitude` | `number` | `28` | Maximum height of the sine wave translation. |
| `period` | `number` | `40` | Duration in frames for a full sine wave cycle. |
| `colors` | `array` | `["#f472b6","#c084fc","#818cf8","#38bdf8","#34d399","#fbbf24"]` | Repeating list of colors for characters. |
| `backgroundColor` | `string` | `#0f0a1a` | CSS color of the background. |
| `fontSize` | `number` | `140` | Font size of the text. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的波浪律动字卡组件（文件：WaveTextTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "MOTION" 改成「___」（每个字母颜色从 COLORS 数组循环取用） 2. 把字母颜色数组从粉红/紫/蓝/青/绿/黄改成「___」（以逗号分隔的 hex 色码，几个颜色都可以） 3. 把背景色从深紫黑 #0f0a1a 改成「___」 4. 把字体大小从 140px 改成 ___px 5. 把波浪振幅从 28px 改成 ___px（数字越大，上下幅度越大） 6. 把波浪速度从每 40 帧一个周期改成每 ___ 帧一个周期（数字越小，波浪越快） 请保留原本的波浪律动效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-wave-text
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-wave-text

## License

MIT
