# AI 快速产出多版本成果 (Yt Audio Fast Results)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-fast-results). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-fast-results/7c13cb649114-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-fast-results.

## Usage

Copy `src/YtAudioFastResults.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioFastResults, ytAudioFastResultsDefaultProps } from './YtAudioFastResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioFastResults"
      component={YtAudioFastResults}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioFastResultsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene19-FastResults.tsx），请帮我做以下调整： 1. 修改计时器显示文字（目前是 "< 5 min"）与时钟快转的帧范围（[10, 55]）。 2. 更改版本卡片数量（目前是 12 张）与格线排版（目前 4 列）。 3. 调整「AI 不会生气」的文字与 AI 脸孔图标的颜色。 4. 修改最终选中的卡片索引（目前是第 7 张，`SELECTED-INDEX = 6`）。 请保留原本的弹出动画与选版高亮效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-fast-results
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-fast-results

## License

MIT
