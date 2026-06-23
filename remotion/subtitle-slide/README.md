# Subtitle Slide

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/subtitle-slide/783a17043092-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/subtitle-slide.

## Usage

Copy `src/SubtitleSlide.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SubtitleSlide, subtitleSlideDefaultProps } from './SubtitleSlide'

export function RemotionRoot() {
  return (
    <Composition
      id="SubtitleSlide"
      component={SubtitleSlide}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={subtitleSlideDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |


## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的滑入字幕组件（文件：SubtitleSlide.tsx），请帮我做以下调整： 1. 把字幕内容改成以下 4 段（修改 SUBTITLES 数组的 text 字段）： - 第 1 段：「___」 - 第 2 段：「___」 - 第 3 段：「___」 - 第 4 段：「___」 2. 把各段的左侧边线颜色改成：「___」、「___」、「___」、「___」（修改 color 字段） 3. 把字体大小从 48 改成「___」 4. 调整滑入速度：把 slideIn 的 stiffness 从 120 改成「___」（数字越大越快） 请保留原本的滑入滑出动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/subtitle-slide
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/subtitle-slide

## License

MIT
