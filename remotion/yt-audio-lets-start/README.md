# 我们开始！能量爆发动画 (Yt Audio Lets Start)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-lets-start). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-lets-start/8a7c9e664614-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-lets-start.

## Usage

Copy `src/YtAudioLetsStart.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioLetsStart, ytAudioLetsStartDefaultProps } from './YtAudioLetsStart'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioLetsStart"
      component={YtAudioLetsStart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioLetsStartDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene27-LetsStart.tsx），请帮我做以下调整： 1. 修改主文字（目前是 "我们开始"）与字体大小（目前是 88px）、字距（目前是 12）。 2. 更换播放图标（`PlayIcon`）的颜色（目前是 `#00D4AA` 绿色）。 3. 调整能量射线的颜色（目前是绿色/蓝色/白色交替）与数量（目前 12 道）。 4. 修改星点（`Sparkle`）的颜色与数量（`revealSparkles` 阵列有 6 个）。 请保留原本的脉冲环动画与弹跳入场效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-lets-start
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-lets-start

## License

MIT
