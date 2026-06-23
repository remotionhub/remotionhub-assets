# Subtitle Dual Lang

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/subtitle-dual-lang/b87d488b6346-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/subtitle-dual-lang.

## Usage

Copy `src/SubtitleDualLang.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SubtitleDualLang, subtitleDualLangDefaultProps } from './SubtitleDualLang'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleDualLang"
      component={SubtitleDualLang}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleDualLangDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `zhFontSize` | `number` | `58` | Font size of the Chinese subtitle. |
| `enFontSize` | `number` | `32` | Font size of the English subtitle. |
| `zhColor` | `string` | `#facc15` | CSS color of the Chinese subtitle. |
| `enColor` | `string` | `#e2e8f0` | CSS color of the English subtitle. |
| `transitionFrames` | `number` | `14` | Duration in frames for transition effects. |
| `bottomOffset` | `number` | `100` | Offset from the bottom of the canvas in pixels. |
| `subtitles` | `array` | `[{"zh":"欢迎来到这个美丽的世界","en":"Welcome to this beautiful world","start":10,"end":65},{"zh":"学习永远不嫌太晚","en":"It's never too late to learn","start":75,"end":130},{"zh":"每一天都是新的开始","en":"Every day is a new beginning","start":140,"end":195},{"zh":"相信自己，勇敢前行","en":"Believe in yourself and move forward","start":205,"end":260}]` | List of dual language subtitles. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的双语字幕组件（文件：SubtitleDualLang.tsx），请帮我做以下调整： 1. 把字幕内容改成以下 4 组（修改 SUBTITLES 数组的 zh 与 en 字段）： - 第 1 组中文：「___」，英文：「___」 - 第 2 组中文：「___」，英文：「___」 - 第 3 组中文：「___」，英文：「___」 - 第 4 组中文：「___」，英文：「___」 2. 把繁中字体大小从 58 改成「___」 3. 把英文字体大小从 32 改成「___」 4. 把繁中文字颜色从黄色 #facc15 改成「___」 请保留原本的淡入淡出与位移动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/subtitle-dual-lang
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/subtitle-dual-lang

## License

MIT
