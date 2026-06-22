# Title Zoom Punch

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-zoom-punch/bcbf45ba8baa-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-zoom-punch.

## Usage

Copy `src/TitleZoomPunch.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleZoomPunch, titleZoomPunchDefaultProps } from './TitleZoomPunch'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleZoomPunch"
      component={TitleZoomPunch}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleZoomPunchDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `IMPACT` | The text content to display. |
| `backgroundColor` | `string` | `#dc2626` | CSS color of the background. |
| `textColor` | `string` | `#ffffff` | CSS color of the text. |
| `fontSize` | `number` | `130` | Font size of the text. |
| `stiffness` | `number` | `250` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `10` | Damping configuration for the spring physics animation. |
| `mass` | `number` | `0.7` | Mass configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的冲击缩放字卡组件（文件：ZoomPunchTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "IMPACT" 改成「___」 2. 把背景色从红色 #dc2626 改成「___」 3. 把文字颜色从白色 #ffffff 改成「___」 4. 把字体大小从 130px 改成 ___px 5. 把起始缩放倍数从 6 倍改成 ___ 倍（数字越大，冲击感越强） 6. 把弹跳感调整：想更弹改小 damping（目前 10，试试 6-8）；想更稳定改大（试试 15-20） 请保留原本的缩放冲击效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-zoom-punch
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-zoom-punch

## License

MIT
