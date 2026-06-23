# Dataviz Waterfall

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-waterfall/a5137ffc68a6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-waterfall.

## Usage

Copy `src/DatavizWaterfall.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizWaterfall, datavizWaterfallDefaultProps } from './DatavizWaterfall'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizWaterfall"
      component={DatavizWaterfall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizWaterfallDefaultProps}
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
我有一个用 Remotion 写的现金流瀑布图组件（文件：WaterfallChart.tsx），请帮我做以下调整： 1. 把各项目标签与数值替换为「___」（修改顶部 ITEMS-RAW 阵列的 label 与 value 栏位） 2. 把 Y 轴最大值从 9000 改成「___」（修改顶部 Y-MAX 常数，让图表高度比例正确） 3. 把正向项目颜色从绿色 #10b981 改成「___」（修改 COLOR-POSITIVE 常数） 4. 把负向项目颜色从红色 #ef4444 改成「___」（修改 COLOR-NEGATIVE 常数） 5. 把合计栏颜色从蓝色 #3b82f6 改成「___」（修改 COLOR-TOTAL 常数） 6. 调整各长条的出场间距：把每根长条的延迟从 index * 12 改成 index * ___（数字愈小出场愈快） 请保留原本的累积基准计算逻辑与虚线连接器，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-waterfall
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-waterfall

## License

MIT
