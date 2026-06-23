# Dataviz Heatmap

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-heatmap/59ab14318829-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-heatmap.

## Usage

Copy `src/DatavizHeatmap.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizHeatmap, datavizHeatmapDefaultProps } from './DatavizHeatmap'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizHeatmap"
      component={DatavizHeatmap}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizHeatmapDefaultProps}
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
我有一个用 Remotion 写的月度活动热力图组件（文件：Heatmap.tsx），请帮我做以下调整： 1. 把 ROW-LABELS 数组换成我的分类名称（6 项）：「___」 2. 把 COL-LABELS 数组换成我的字段名称（7 项）：「___」 3. 把 VALUES 二维数组（6 列 × 7 栏）换成我的数据，数值范围 0–100 4. 把标题「月度活动热力图」改成「___」，副标题改成「___」 5. 把色阶冷色端从深蓝 #1e3a5f 改成「___」，暖色端从红色 #ef4444 改成「___」 6. 把每格出场间隔从 index * 2 改成 index * ___（数字越大越慢出场） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-heatmap
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-heatmap

## License

MIT
