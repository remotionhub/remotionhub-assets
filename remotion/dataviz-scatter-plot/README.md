# Dataviz Scatter Plot

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-scatter-plot/dc94e491c650-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-scatter-plot.

## Usage

Copy `src/DatavizScatterPlot.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizScatterPlot, datavizScatterPlotDefaultProps } from './DatavizScatterPlot'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizScatterPlot"
      component={DatavizScatterPlot}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizScatterPlotDefaultProps}
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
我有一个用 Remotion 写的散布图组件（文件：ScatterPlot.tsx），请帮我做以下调整： 1. 把 X 轴标签从「转换率 (%)」改成「___」（修改 SVG 中 X-axis label 的文字） 2. 把 Y 轴标签从「满意度 (%)」改成「___」（修改 SVG 中 Y-axis label 的文字） 3. 把 A 群组颜色从蓝 #3b82f6 改成「___」（修改 COLOR-A 常数） 4. 把 B 群组颜色从橙 #f59e0b 改成「___」（修改 COLOR-B 常数） 5. 调整各点弹入间隔：想更密集请把 index * 5 改小；想更分散改大 6. 把标题从「用户行为散布图」改成「___」 请保留每个点的弹性 spring 入场动画与光晕效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-scatter-plot
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-scatter-plot

## License

MIT
