# Title Word Fade

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-word-fade/76aa111a8835-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-word-fade.

## Usage

Copy `src/TitleWordFade.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleWordFade, titleWordFadeDefaultProps } from './TitleWordFade'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleWordFade"
      component={TitleWordFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleWordFadeDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `words` | `array` | `[{"text":"Think","color":"#0f172a"},{"text":"Different.","color":"#3b82f6"}]` | List of words with custom text and color. |
| `wordDelay` | `number` | `20` | Frames delay between fading in each word. |
| `backgroundColor` | `string` | `#f8fafc` | CSS color of the background. |
| `fontSize` | `number` | `110` | Font size of the text. |
| `stiffness` | `number` | `60` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `28` | Damping configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的逐字淡入字卡组件（文件：WordFadeTitle.tsx），请帮我做以下调整： 1. 把两行文字从 "Think" / "Different." 改成「___」/「___」 2. 把第一行颜色从深黑 #0f172a 改成「___」 3. 把第二行颜色从蓝色 #3b82f6 改成「___」 4. 把背景色从浅白 #f8fafc 改成「___」 5. 把字体大小从 110px 改成 ___px 6. 把两行的出场间隔从 20 帧改成 ___ 帧（数字越大，第二行出现越晚） 如果需要三行以上，可以在 WORDS 数组中继续新增 `{ text: "___", color: "___" }` 对象。 请保留原本的逐词淡入上移效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-word-fade
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-word-fade

## License

MIT
