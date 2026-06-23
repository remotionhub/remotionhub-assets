# Title Glitch Text

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-glitch-text/b5f171c75133-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-glitch-text.

## Usage

Copy `src/TitleGlitchText.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleGlitchText, titleGlitchTextDefaultProps } from './TitleGlitchText'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleGlitchText"
      component={TitleGlitchText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGlitchTextDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `GLITCH TEXT` | The text content to display. |
| `backgroundColor` | `string` | `#09090b` | CSS color of the background. |
| `textColor` | `string` | `#ffffff` | CSS color of the main text. |
| `redColor` | `string` | `#ff0033` | CSS color of the red glitch offset text. |
| `blueColor` | `string` | `#0033ff` | CSS color of the blue glitch offset text. |
| `fontSize` | `number` | `120` | Font size of the text. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的故障风字卡组件（文件：GlitchTextTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "GLITCH TEXT" 改成「___」 2. 把主文字颜色从白色 #ffffff 改成「___」 3. 把红色色道偏移颜色从 #ff0033 改成「___」 4. 把蓝色色道偏移颜色从 #0033ff 改成「___」 5. 把背景色从近黑 #09090b 改成「___」 6. 把故障帧数密度调整：GLITCH-FRAMES 数组中的数字代表哪几帧会触发故障，可以增加或减少数组中的数字来控制故障频率 请保留原本的 RGB 分离 + clip-path 故障效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-glitch-text
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-glitch-text

## License

MIT
