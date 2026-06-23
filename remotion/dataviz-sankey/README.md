# Dataviz Sankey

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-sankey/b27b286283d1-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-sankey.

## Usage

Copy `src/DatavizSankey.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizSankey, datavizSankeyDefaultProps } from './DatavizSankey'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizSankey"
      component={DatavizSankey}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizSankeyDefaultProps}
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
我有一个用 Remotion 写的桑基图组件（文件：SankeyDiagram.tsx），请帮我做以下调整： 1. 把 SOURCES 数组换成我的来源节点（最多 5 个），每项包含 id（名称）、value（数量）、color（十六进位色码）、y（垂直位置 0–1） 2. 把 CATEGORIES 数组换成我的目标节点（最多 4 个），同样包含 id、value、color、y 3. 把 FLOWS 数组换成对应的流量关系，每项包含 from（来源 id）、to（目标 id）、value（流量值） 4. 把标题「流量来源分析」改成「___」，副标题改成「___」 5. 把左栏标签「流量来源」改成「___」，右栏标签「落地页面」改成「___」 6. 把路径淡入的起始影格从 50 调整成 ___（数字越小路径越早出现） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-sankey
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-sankey

## License

MIT
