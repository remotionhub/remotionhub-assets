# Dataviz Radar

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-radar/e58140dde33e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-radar.

## Usage

Copy `src/DatavizRadar.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizRadar, datavizRadarDefaultProps } from './DatavizRadar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizRadar"
      component={DatavizRadar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizRadarDefaultProps}
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
我有一个用 Remotion 写的能力雷达图组件（文件：RadarChart.tsx），请帮我做以下调整： 1. 把六个轴标签从「技术、沟通、创意、运行、协作、领导」改成「___」（修改顶部 AXES 阵列） 2. 把候选人 A 的数值从 [85, 72, 90, 78, 88, 65] 改成「___」（修改 SERIES-A.values） 3. 把候选人 B 的数值从 [70, 88, 75, 92, 80, 85] 改成「___」（修改 SERIES-B.values） 4. 把候选人 A 的颜色从蓝色 #3b82f6 改成「___」 5. 把候选人 B 的颜色从橙色 #f59e0b 改成「___」 6. 把图表半径从 300 改成「___」（修改顶部 RADIUS 常数，数值愈大图形愈大） 请保留原本的同心六边形格线与弹性动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-radar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-radar

## License

MIT
