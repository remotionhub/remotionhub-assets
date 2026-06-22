# Title Scramble

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-scramble/845a65df9284-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-scramble.

## Usage

Copy `src/TitleScramble.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleScramble, titleScrambleDefaultProps } from './TitleScramble'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleScramble"
      component={TitleScramble}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleScrambleDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `DECODED` | The text content to display. |
| `chars` | `string` | `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&` | Characters pool used during the scramble animation. |
| `stagger` | `number` | `6` | Frames delay between resolving each character. |
| `scrambleFrames` | `number` | `8` | Initial number of scramble frames before resolving begins. |
| `backgroundColor` | `string` | `#050a05` | CSS color of the background. |
| `decodedColor` | `string` | `#00ff41` | CSS color for resolved characters. |
| `scrambledColor` | `string` | `#007a20` | CSS color for scrambling characters. |
| `fontSize` | `number` | `110` | Font size of the text. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的乱码解码字卡组件（文件：ScrambleTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "DECODED" 改成「___」（建议全大写，7 个字元以内效果最佳） 2. 把解码后的文字颜色从亮绿 #00ff41 改成「___」 3. 把乱码状态的颜色从暗绿 #007a20 改成「___」 4. 把背景色从极深绿黑 #050a05 改成「___」 5. 把字体从等宽字型 Courier New 改成「___」（等宽字型效果最佳，例如：'Lucida Console', monospace） 6. 把每个字元的解码间隔从每 6 帧改成每 ___ 帧（数字越大，解码越慢） 请保留原本的逐字元乱码解码效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-scramble
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-scramble

## License

MIT
