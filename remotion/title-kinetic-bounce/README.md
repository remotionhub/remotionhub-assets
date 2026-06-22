# Title Kinetic Bounce

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-kinetic-bounce/5e65427b0c93-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-kinetic-bounce.

## Usage

Copy `src/TitleKineticBounce.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleKineticBounce, titleKineticBounceDefaultProps } from './TitleKineticBounce'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleKineticBounce"
      component={TitleKineticBounce}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleKineticBounceDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `words` | `array` | `["Make","Your","Videos","Alive."]` | List of words to bounce in. |
| `colors` | `array` | `["#ffffff","#ffffff","#ffffff","#38bdf8"]` | Colors matching each word in the list. |
| `wordDelay` | `number` | `15` | Frames delay between each word starting its bounce. |
| `backgroundColor` | `string` | `#0f172a` | CSS color of the background. |
| `fontSize` | `number` | `96` | Font size of the text. |
| `stiffness` | `number` | `150` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `5` | Damping configuration for the spring physics animation. |
| `mass` | `number` | `0.6` | Mass configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的弹跳动态字卡组件（文件：KineticBounceTitle.tsx），请帮我做以下调整： 1. 把显示的文字从 ["Make", "Your", "Videos", "Alive."] 改成 ["___", "___", "___", "___"] 2. 把最后一个字的强调色从青色 #38bdf8 改成「___」 3. 把字体大小从 96px 改成 ___px 4. 把背景色从深蓝 #0f172a 改成「___」 5. 把弹跳强度改成更「___」（想更弹：把 damping 从 5 改小；想稳定：改大到 12-20） 6. 把每个字的出场间隔从 15 帧改成 ___ 帧（数字越大，字出现得越慢） 请保留原本的每字依序弹跳入场效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-kinetic-bounce
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-kinetic-bounce

## License

MIT
