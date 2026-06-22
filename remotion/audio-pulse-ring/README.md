# Audio Pulse Ring

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/audio-pulse-ring/cbe8bfbbde9f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/audio-pulse-ring.

## Usage

Copy `src/AudioPulseRing.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { AudioPulseRing, audioPulseRingDefaultProps } from './AudioPulseRing'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioPulseRing"
      component={AudioPulseRing}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioPulseRingDefaultProps}
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
我有一个用 Remotion 写的脉冲光环视觉化组件（文件：AudioPulseRing.tsx），请帮我做以下调整： 1. 把圆环数量从 6 个改成「___」个 2. 把脉冲间隔从 18 帧改成「___」帧（数值越小脉冲越密集） 3. 把最大扩散半径从 420 改成「___」 4. 把中央图标从「♫」改成「___」 5. 把主色调从科技蓝（#00d4ff）改成「___」 请保留原本的循环扩散动画与中央呼吸效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/audio-pulse-ring
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/audio-pulse-ring

## License

MIT
