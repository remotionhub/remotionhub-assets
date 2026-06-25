# 音频软体选择三条件 (Yt Audio Software Criteria)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-software-criteria). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-software-criteria/6293822e82b6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-software-criteria.

## Usage

Copy `src/YtAudioSoftwareCriteria.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioSoftwareCriteria, ytAudioSoftwareCriteriaDefaultProps } from './YtAudioSoftwareCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioSoftwareCriteria"
      component={YtAudioSoftwareCriteria}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioSoftwareCriteriaDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene07-SoftwareCriteria.tsx），请帮我做以下调整： 1. 修改 `cards` 阵列中三张卡片的 `text` 文字内容，换成你自己的评选条件。 2. 更换三个 SVG 图标（`ImportEditIcon`、`MCPConnectorIcon`、`OpenSourceIcon`），可改用更适合主题的形状。 3. 调整标题文字（目前是 "软体选择的三个条件"）。 4. 修改卡片宽度（目前是 1400px）与卡片间距（目前是 32px）以适应不同萤幕比例。 请保留原本的从左侧滑入动画与徽章脉冲效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-software-criteria
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-software-criteria

## License

MIT
