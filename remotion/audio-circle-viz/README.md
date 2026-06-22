# Audio Circle Viz

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/audio-circle-viz/6c5b33e40fc4-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/audio-circle-viz.

## Usage

Copy `src/AudioCircleViz.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { AudioCircleViz, audioCircleVizDefaultProps } from './AudioCircleViz'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioCircleViz"
      component={AudioCircleViz}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioCircleVizDefaultProps}
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
我有一个用 Remotion 写的圆形频谱视觉化组件（文件：AudioCircleViz.tsx），请帮我做以下调整： 1. 把射线数量从 120 根改成「___」根 2. 把基础圆半径从 180 改成「___」 3. 把最大额外延伸长度从 160 改成「___」 4. 把中央图标从音符「♪」改成「___」（可以是任意文字或 emoji） 请保留原本的彩虹渐层与呼吸动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/audio-circle-viz
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/audio-circle-viz

## License

MIT
