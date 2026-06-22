# Title Handwriting

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-handwriting/9be8caf9729d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-handwriting.

## Usage

Copy `src/TitleHandwriting.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleHandwriting, titleHandwritingDefaultProps } from './TitleHandwriting'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleHandwriting"
      component={TitleHandwriting}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleHandwritingDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `Create` | The text content to display. |
| `textColor` | `string` | `#1c1917` | CSS color of the text stroke and fill. |
| `backgroundColor` | `string` | `#fafaf9` | CSS color of the background. |
| `underlineColor` | `string` | `#ef4444` | CSS color of the underline. |
| `fontSize` | `number` | `145` | Font size of the text. |
| `dashLength` | `number` | `2000` | SVG stroke-dasharray length. |
| `startFrame` | `number` | `10` | Frame to start drawing animation. |
| `endFrame` | `number` | `140` | Frame to complete drawing animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的手写风字卡组件（文件：HandwritingTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "Create" 改成「___」（注意：文字越长可能需要调整 viewBox 宽度） 2. 把文字颜色从深棕黑 #1c1917 改成「___」 3. 把底部装饰线的颜色从红色 #ef4444 改成「___」 4. 把背景色从米白 #fafaf9 改成「___」 5. 把字体从 Georgia/Times New Roman 改成「___」（例如：'Arial', sans-serif） 6. 把书写速度调整：描绘动画现在从第 10 帧到第 140 帧，想更快可改成第 10 到 80 帧 请保留原本的笔迹描绘 → 填色浮现的效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-handwriting
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-handwriting

## License

MIT
