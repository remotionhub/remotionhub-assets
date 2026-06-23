# Dataviz Area Chart

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-area-chart/c19cf06546cf-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-area-chart.

## Usage

Copy `src/DatavizAreaChart.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizAreaChart, datavizAreaChartDefaultProps } from './DatavizAreaChart'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizAreaChart"
      component={DatavizAreaChart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizAreaChartDefaultProps}
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
我有一个用 Remotion 写的面积折线图组件（文件：AreaChart.tsx），请帮我做以下调整： 1. 把月份标签从 1月–8月 改成「___」（修改顶部 MONTHS 数组） 2. 把本年度数据 SERIES-A 改成「___」（数组长度需与 MONTHS 一致） 3. 把去年同期数据 SERIES-B 改成「___」（数组长度需与 MONTHS 一致） 4. 把本年度线条颜色从蓝 #3b82f6 改成「___」（修改 COLOR-A 常数） 5. 把去年同期线条颜色从紫 #8b5cf6 改成「___」（修改 COLOR-B 常数） 6. 调整描线速度：想更快请把 interpolate(frame, [20, 80], ...) 的结束影格从 80 改小；想更慢改大 请保留原本的 strokeDashoffset 描线动画与渐层填色效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-area-chart
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-area-chart

## License

MIT
