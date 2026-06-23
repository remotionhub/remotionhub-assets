# Dataviz Comparison Split

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-comparison-split/a71f2529cb3a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-comparison-split.

## Usage

Copy `src/DatavizComparisonSplit.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizComparisonSplit, datavizComparisonSplitDefaultProps } from './DatavizComparisonSplit'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizComparisonSplit"
      component={DatavizComparisonSplit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizComparisonSplitDefaultProps}
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
我有一个用 Remotion 写的左右分割对比图组件（文件：ComparisonSplit.tsx），请帮我做以下调整： 1. 把左侧数据替换成我的数值（修改顶部 LEFT 对象的 title 与 metrics 阵列） 2. 把右侧数据替换成我的数值（修改顶部 RIGHT 对象的 title 与 metrics 阵列） 3. 把左侧背景色从深蓝 #0f172a 改成「___」 4. 把右侧背景色从深紫 #1a0533 改成「___」 5. 调整数字计数速度：把 interpolate 的结束帧从 100 改成「___」（数字越小计数越快） 6. 调整指标滑入时间：修改 METRIC-FRAMES 阵列中的帧数（默认 [25, 35, 45, 55]） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-comparison-split
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-comparison-split

## License

MIT
