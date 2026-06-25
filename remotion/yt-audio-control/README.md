# AI 音频控制滑杆 (Yt Audio Control)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-control). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-control/e7c5308aac9f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-control.

## Usage

Copy `src/YtAudioControl.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioControl, ytAudioControlDefaultProps } from './YtAudioControl'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioControl"
      component={YtAudioControl}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioControlDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene03-Control.tsx），请帮我做以下调整： 1. 修改三个滑杆的标签（目前是 "Tone"、"Speed"、"Style"）与颜色（目前是 accent 绿、红、黄）。 2. 调整滑杆最终停留的位置比例（目前分别是 0.7、0.45、0.85，范围 0-1）。 3. 更换右侧三个应用场景图标（`FilmIcon`、`MicIcon`、`StorefrontIcon`）与标签文字。 4. 修改连接线的颜色（目前是蓝/红/黄半透明）。 请保留原本的滑杆动画与贝兹曲线连线效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-control
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-control

## License

MIT
