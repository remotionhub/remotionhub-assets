# Dataviz Stacked Bar

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-stacked-bar/0e1c65207563-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-stacked-bar.

## Usage

Copy `src/DatavizStackedBar.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizStackedBar, datavizStackedBarDefaultProps } from './DatavizStackedBar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizStackedBar"
      component={DatavizStackedBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizStackedBarDefaultProps}
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
我有一个用 Remotion 写的季度收入结构堆叠长条图组件（文件：StackedBar.tsx），请帮我做以下调整： 1. 把季度标签从 ["Q1", "Q2", "Q3", "Q4", "Q5"] 改成「___」（修改顶部 QUARTERS 阵列） 2. 把三个业务线的名称从「产品、服务、授权」改成「___」（修改 SERIES 阵列的 name 栏位） 3. 把各业务线的数值替换为「___」（修改 SERIES 阵列的 values 栏位，需与季度数量对应） 4. 把产品线颜色从蓝色 #3b82f6 改成「___」 5. 把服务线颜色从绿色 #10b981 改成「___」 6. 把授权线颜色从紫色 #8b5cf6 改成「___」 请保留原本的堆叠逻辑、弹性动画与顶部总计标签，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-stacked-bar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-stacked-bar

## License

MIT
