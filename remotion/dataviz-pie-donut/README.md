# Dataviz Pie Donut

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-pie-donut/dc3d3a67aa3f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-pie-donut.

## Usage

Copy `src/DatavizPieDonut.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizPieDonut, datavizPieDonutDefaultProps } from './DatavizPieDonut'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizPieDonut"
      component={DatavizPieDonut}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizPieDonutDefaultProps}
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
我有一个用 Remotion 写的甜甜圈图组件（文件：PieDonut.tsx），请帮我做以下调整： 1. 把标题从「收入结构分析」改成「___」 2. 把副标题从「各类别占比分布」改成「___」 3. 把各区段的标签依序改成「___、___、___、___」 4. 把各区段的百分比依序改成「___、___、___、___」（总和必须等于 100） 5. 把各区段的颜色依序改成「___、___、___、___」 6. 把甜甜圈圆环的粗细从 70 改成 ___（数字越大圆环越宽） 请保留原本的逐段填入动画与中心计数效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-pie-donut
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-pie-donut

## License

MIT
