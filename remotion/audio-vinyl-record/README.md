# Audio Vinyl Record

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/audio-vinyl-record/edd6a463dfa8-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/audio-vinyl-record.

## Usage

Copy `src/AudioVinylRecord.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { AudioVinylRecord, audioVinylRecordDefaultProps } from './AudioVinylRecord'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioVinylRecord"
      component={AudioVinylRecord}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioVinylRecordDefaultProps}
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
我有一个用 Remotion 写的黑胶唱片视觉化组件（文件：AudioVinylRecord.tsx），请帮我做以下调整： 1. 把唱片旋转速度从每帧 1.2 度改成「___」度 2. 把标签颜色从红色（#cc3300）改成「___」 3. 把右侧频谱棒数量从 24 根改成「___」根 4. 把标题文字从「黑胶唱片」改成「___」 请保留原本的旋转动画与唱针臂，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/audio-vinyl-record
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/audio-vinyl-record

## License

MIT
