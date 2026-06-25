# 为乐曲加入人声动画 (Yt Audio Add Vocals)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-add-vocals). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-add-vocals/30f3b6e62795-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-add-vocals.

## Usage

Copy `src/YtAudioAddVocals.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioAddVocals, ytAudioAddVocalsDefaultProps } from './YtAudioAddVocals'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioAddVocals"
      component={YtAudioAddVocals}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioAddVocalsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene23-AddVocals.tsx），请帮我做以下调整： 1. 修改乐器轨道的标签与颜色（伴奏轨道与人声轨道）。 2. 调整人声麦克风图标的样式（`MicrophoneIcon` 组件）。 3. 更改人声轨道的波形颜色（目前是 `colors.accent` 蓝色）。 4. 修改背景底色（目前是 `colors.background`）。 请保留原本的波形描边动画与人声加入的渐入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-add-vocals
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-add-vocals

## License

MIT
