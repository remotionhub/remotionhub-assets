# Dataviz Progress Ring

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-progress-ring/8f3b6caebd84-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-progress-ring.

## Usage

Copy `src/DatavizProgressRing.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizProgressRing, datavizProgressRingDefaultProps } from './DatavizProgressRing'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizProgressRing"
      component={DatavizProgressRing}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizProgressRingDefaultProps}
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
我有一个用 Remotion 写的环形进度图组件（文件：ProgressRing.tsx），请帮我做以下调整： 1. 把三个环的标签与目标百分比改成「___」（修改顶部 RINGS 阵列中各对象的 label 与 percent） 2. 把各环的描边颜色改成「___」（修改 color 栏位，格式为 hex） 3. 把各环的轨道底色改成「___」（修改 trackColor 栏位，格式为 hex） 4. 调整环的半径：目前 RADIUS = 120，想更大请改大，想更小请改小 5. 调整描边粗细：目前 STROKE-WIDTH = 16，可改为「___」 6. 调整各环启动延迟：目前 startFrame = index * 15，想更紧凑请改小 请保留发光效果与中心数字计数逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-progress-ring
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-progress-ring

## License

MIT
