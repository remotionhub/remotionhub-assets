# Title Gradient Wipe

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-gradient-wipe/983a067e8102-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-gradient-wipe.

## Usage

Copy `src/TitleGradientWipe.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleGradientWipe, titleGradientWipeDefaultProps } from './TitleGradientWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleGradientWipe"
      component={TitleGradientWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGradientWipeDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `Your Story Starts Here` | The text content to display. |
| `backgroundColor` | `string` | `#030712` | CSS color of the background. |
| `baseTextColor` | `string` | `#1f2937` | CSS color of the dark base text. |
| `gradient` | `string` | `linear-gradient(90deg, #06b6d4 0%, #8b5cf6 50%, #f59e0b 100%)` | CSS gradient background for the text reveal. |
| `fontSize` | `number` | `96` | Font size of the text in pixels. |
| `stiffness` | `number` | `50` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `30` | Damping configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的渐层擦拭字卡组件（文件：GradientWipeTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "Your Story Starts Here" 改成「___」 2. 把渐层色从青蓝→紫→琥珀（#06b6d4 → #8b5cf6 → #f59e0b）改成「___」→「___」→「___」 3. 把底层暗色文字从 #1f2937 改成「___」（越深越不明显） 4. 把背景色从近黑 #030712 改成「___」 5. 把字体大小从 96px 改成 ___px 6. 把擦拭速度调整：想更快请把 stiffness 从 50 改大（例如 100）；想更慢请改小（例如 20） 请保留原本的由左至右渐层擦拭效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-gradient-wipe
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-gradient-wipe

## License

MIT
