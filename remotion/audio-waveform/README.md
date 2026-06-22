# Audio Waveform

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/audio-waveform/bda4dd768d01-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/audio-waveform.

## Usage

Copy `src/AudioWaveform.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { AudioWaveform, audioWaveformDefaultProps } from './AudioWaveform'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioWaveform"
      component={AudioWaveform}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioWaveformDefaultProps}
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
我有一个用 Remotion 写的流动声波视觉化组件（文件：AudioWaveform.tsx），请帮我做以下调整： 1. 把第一层（最主要的）声波颜色从「#00d4ff」改成「___」 2. 把波形振幅从 80 改成「___」（数值越大波形越高） 3. 把背景颜色从「#030814」改成「___」 4. 把标题从「声波视觉化」改成「___」 请保留所有层次的叠加与发光效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/audio-waveform
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/audio-waveform

## License

MIT
