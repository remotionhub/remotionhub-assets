# Title Blur Focus

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-blur-focus/982a7f964f56-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-blur-focus.

## Usage

Copy `src/TitleBlurFocus.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleBlurFocus, titleBlurFocusDefaultProps } from './TitleBlurFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleBlurFocus"
      component={TitleBlurFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleBlurFocusDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `IN FOCUS` | The text content to display. |
| `textColor` | `string` | `#ffffff` | CSS color of the text. |
| `backgroundColor` | `string` | `#000000` | CSS color of the background. |
| `fontSize` | `number` | `108` | Font size of the text in pixels. |
| `initialBlur` | `number` | `40` | Initial blur amount in pixels. |
| `stiffness` | `number` | `35` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `40` | Damping configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的模糊聚焦字卡组件（文件：BlurFocusTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "IN FOCUS" 改成「___」 2. 把文字颜色从白色 #ffffff 改成「___」 3. 把背景色从纯黑 #000000 改成「___」 4. 把字体大小从 108px 改成 ___px 5. 把起始模糊值从 40px 改成 ___px（数字越大，初始越模糊） 6. 把聚焦速度调整：想更慢请把 stiffness 从 35 改小（例如 15）；想更快请改大（例如 60） 请保留原本的模糊到清晰的聚焦效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-blur-focus
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-blur-focus

## License

MIT
