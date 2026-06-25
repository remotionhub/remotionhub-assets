# Rock 曲风混音轨道动画 (Yt Audio Rock Remix)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-rock-remix). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-rock-remix/af6f2aaf2234-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-rock-remix.

## Usage

Copy `src/YtAudioRockRemix.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioRockRemix, ytAudioRockRemixDefaultProps } from './YtAudioRockRemix'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioRockRemix"
      component={YtAudioRockRemix}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioRockRemixDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene15-RockRemix.tsx），请帮我做以下调整： 1. 修改 `TRACKS` 阵列中四条轨道的 `label`（目前是 Piano/Guitar/Drums/Bass）与出现时间点（`appearFrame`）。 2. 修改顶部徽章文字（目前是 "ROCK"）与颜色。 3. 调整速度计最终显示值（目前是 "1.5x"）与指针目标角度。 4. 更换四种乐器的颜色配置（目前是白/红/黄/蓝）。 请保留原本的波形动画与速度计效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-rock-remix
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-rock-remix

## License

MIT
