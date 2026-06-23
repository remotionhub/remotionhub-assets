# Dataviz Bar Chart

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-bar-chart/edca650c997b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-bar-chart.

## Usage

Copy `src/DatavizBarChart.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizBarChart, datavizBarChartDefaultProps } from './DatavizBarChart'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBarChart"
      component={DatavizBarChart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBarChartDefaultProps}
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
我有一个用 Remotion 写的季度业绩长条图组件（文件：BarChart.tsx），请帮我做以下调整： 1. 把标题从「季度业绩」改成「___」 2. 把副标题从「各季销售表现概览」改成「___」 3. 把各长条的颜色依序改成「___、___、___、___、___、___」 4. 把各季的数值依序改成「___、___、___、___、___、___」（最大值建议不超过 100） 5. 把各季的标签依序改成「___、___、___、___、___、___」（例如月份或部门名称） 6. 把每根长条的出场间隔从 12 帧改成 ___（数字越小出场越密集） 请保留原本的弹簧动画与计数效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-bar-chart
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-bar-chart

## License

MIT
