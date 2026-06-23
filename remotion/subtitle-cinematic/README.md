# Subtitle Cinematic

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/subtitle-cinematic/8107e2ba7ed3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/subtitle-cinematic.

## Usage

Copy `src/SubtitleCinematic.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SubtitleCinematic, subtitleCinematicDefaultProps } from './SubtitleCinematic'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleCinematic"
      component={SubtitleCinematic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleCinematicDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `letterboxHeight` | `number` | `135` | Height of the cinematic letterbox bands. |
| `speakerColor` | `string` | `#a0aec0` | CSS color for the speaker name. |
| `textColor` | `string` | `#ffffff` | CSS color for the subtitle text. |
| `textFontSize` | `number` | `44` | Font size for the subtitle text. |
| `speakerFontSize` | `number` | `22` | Font size for the speaker name. |
| `transitionFrames` | `number` | `15` | Duration in frames for fade transitions. |
| `subtitles` | `array` | `[{"speaker":"旁白","text":"在这个故事开始之前","start":15,"end":65},{"speaker":"林小雨","text":"我从来不相信命运的安排","start":80,"end":130},{"speaker":"旁白","text":"直到那个雨夜，他们相遇了","start":145,"end":195},{"speaker":"陈明宇","text":"有些相遇，是一辈子的缘分","start":210,"end":260}]` | List of subtitles with speaker, text, and timing in frames. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的电影风格字幕组件（文件：SubtitleCinematic.tsx），请帮我做以下调整： 1. 把字幕内容改成以下 4 段（修改 SUBTITLES 数组的 text 与 speaker 字段）： - 第 1 段说话者：「___」，字幕：「___」 - 第 2 段说话者：「___」，字幕：「___」 - 第 3 段说话者：「___」，字幕：「___」 - 第 4 段说话者：「___」，字幕：「___」 2. 把字幕主文字大小从 44 改成「___」 3. 把说话者名称文字大小从 22 改成「___」 4. 把电影黑边高度从 135 改成「___」（影响遮幅比例感） 请保留原本的淡入淡出动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/subtitle-cinematic
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/subtitle-cinematic

## License

MIT
