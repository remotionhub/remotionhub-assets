# Subtitle Fade

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/subtitle-fade/fd41b9bd86a2-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/subtitle-fade.

## Usage

Copy `src/SubtitleFade.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SubtitleFade, subtitleFadeDefaultProps } from './SubtitleFade'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleFade"
      component={SubtitleFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleFadeDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `fontSize` | `number` | `52` | Font size of the subtitle text. |
| `bgOpacity` | `number` | `0.72` | Opacity of the dark background block. |
| `bottomOffset` | `number` | `120` | Distance from the bottom of the canvas in pixels. |
| `transitionFrames` | `number` | `12` | Duration of fade in/out transitions in frames. |
| `textColor` | `string` | `#ffffff` | CSS color of the subtitle text. |
| `subtitles` | `array` | `[{"text":"欢迎来到 Remotion 动画世界","start":10,"end":60},{"text":"用代码创作令人惊艳的视频","start":70,"end":120},{"text":"支持 React 组件与所有动画效果","start":130,"end":180},{"text":"开始你的第一个 Remotion 项目吧！","start":190,"end":240}]` | List of subtitles to display. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的淡入淡出字幕组件（文件：SubtitleFade.tsx），请帮我做以下调整： 1. 把字幕内容改成以下 4 段（修改 SUBTITLES 阵列的 text 栏位）： - 第 1 段：「___」 - 第 2 段：「___」 - 第 3 段：「___」 - 第 4 段：「___」 2. 把字体大小从 52 改成「___」 3. 把字幕背景透明度从 0.72 改成「___」（0 = 全透明，1 = 全黑） 4. 把字幕显示位置从 bottom: 120 改成「___」 请保留原本的淡入淡出动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/subtitle-fade
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/subtitle-fade

## License

MIT
