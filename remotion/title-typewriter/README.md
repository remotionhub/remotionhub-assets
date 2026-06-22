# Title Typewriter

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-typewriter/d587fd4164b8-thumb.png)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-typewriter.

## Usage

Copy `src/TitleTypewriter.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleTypewriter, titleTypewriterDefaultProps } from './TitleTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleTypewriter"
      component={TitleTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleTypewriterDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `Hello, Remotion.` | The text content to type out. |
| `charsPerFrame` | `number` | `2` | Number of characters typed per frame. |
| `fontSize` | `number` | `72` | Font size of the text. |
| `textColor` | `string` | `#ffffff` | CSS color of the text. |
| `backgroundColor` | `string` | `#0f172a` | CSS color of the background. |
| `cursorColor` | `string` | `#38bdf8` | CSS color of the blinking cursor. |
| `cursorBlinkInterval` | `number` | `15` | Blink interval in frames for the cursor. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的打字机字卡组件（文件：TypewriterTitle.tsx），请帮我做以下调整： 1. 把显示的文字从「Hello, Remotion.」改成「___」 2. 把打字速度从每帧 2 个字改成每帧 ___ 个字（数字越大越快） 3. 把文字颜色从白色改成「___」 4. 把背景色从深蓝 #0f172a 改成「___」 5. 把游标颜色从青色 #38bdf8 改成「___」 6. 把字体大小从 72px 改成 ___px 请保留原本的逐字打出效果和游标闪烁，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-typewriter
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-typewriter

## License

MIT
