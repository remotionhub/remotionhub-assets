# Title 3d Rotate

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-3d-rotate/3a6b2e27af48-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-3d-rotate.

## Usage

Copy `src/Title3dRotate.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { Title3dRotate, title3dRotateDefaultProps } from './Title3dRotate'

export function RemotionRoot() {
  return (
    <Composition
      id="Title3dRotate"
      component={Title3dRotate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={title3dRotateDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `3D ROTATE` | The text content to display. |
| `textColor` | `string` | `#fafafa` | CSS color of the text. |
| `backgroundColor` | `string` | `#18181b` | CSS color of the background. |
| `fontSize` | `number` | `110` | Font size of the text in pixels. |
| `perspective` | `string` | `1200px` | CSS perspective distance. |
| `stiffness` | `number` | `80` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `15` | Damping configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的 3D 旋转字卡组件（文件：Rotate3DTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "3D ROTATE" 改成「___」 2. 把文字颜色从近白 #fafafa 改成「___」 3. 把背景色从深灰 #18181b 改成「___」 4. 把字体大小从 110px 改成 ___px 5. 把透视距离从 1200px 改成 ___px（数字越小，3D 效果越夸张） 6. 把旋转方向从 Y 轴（rotateY）改成「___」轴（可选：rotateX、rotateY、rotateZ） 请保留原本的 3D 旋转入场效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-3d-rotate
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-3d-rotate

## License

MIT
