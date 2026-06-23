# Subtitle Karaoke

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/subtitle-karaoke/93fce6c388c6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/subtitle-karaoke.

## Usage

Copy `src/SubtitleKaraoke.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SubtitleKaraoke, subtitleKaraokeDefaultProps } from './SubtitleKaraoke'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleKaraoke"
      component={SubtitleKaraoke}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleKaraokeDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lyrics` | `string` | `月亮代表我的心` | Lyrics string to render character by character. |
| `title` | `string` | `月亮代表我的心` | Title display text. |
| `charHighlightStart` | `array` | `[15,40,65,90,115,140,165]` | Start frame of high-light animation for each character. |
| `highlightDuration` | `number` | `28` | Duration in frames for highlight transition of one character. |
| `fontSize` | `number` | `88` | Font size of lyric characters. |
| `unhighlightedRGB` | `array` | `[156,163,175]` | RGB colors array for unhighlighted characters. |
| `highlightRGB` | `array` | `[250,204,21]` | RGB colors array for highlighted characters. |
| `totalFrames` | `number` | `210` | Total frames of composition used to calibrate the progress bar. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的卡拉 OK 逐字高亮组件（文件：SubtitleKaraoke.tsx），请帮我做以下调整： 1. 把歌词从「月亮代表我的心」改成「___」（修改 LYRICS 常数） 2. 根据新歌词字数更新 CHAR-HIGHLIGHT-START 数组（每个字对应一个起始帧，间隔约 25 帧一个字） 3. 把高亮颜色从亮黄色（rgb 250,204,21）改成「___」色系 4. 把字体大小从 88 改成「___」 5. 把标题文字从「月亮代表我的心」改成「___」 请保留逐字高亮与缩放动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/subtitle-karaoke
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/subtitle-karaoke

## License

MIT
