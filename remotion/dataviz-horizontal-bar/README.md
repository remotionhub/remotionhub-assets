# Dataviz Horizontal Bar

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-horizontal-bar/496760796315-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-horizontal-bar.

## Usage

Copy `src/DatavizHorizontalBar.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizHorizontalBar, datavizHorizontalBarDefaultProps } from './DatavizHorizontalBar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizHorizontalBar"
      component={DatavizHorizontalBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizHorizontalBarDefaultProps}
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
我有一个用 Remotion 写的水平长条竞赛图组件（文件：HorizontalBarRace.tsx），请帮我做以下调整： 1. 把各条目的名称、数值与颜色改成「___」（修改顶部 ITEMS 阵列，名称放 name、数值放 value、颜色放 color） 2. 确保阵列仍按 value 由大到小排序，最大值放首位 3. 把长条最大占宽比例从 70% 改成「___」（修改 BAR-MAX-WIDTH-PERCENT 常数） 4. 调整各条启动延迟：目前 startFrame = index * 10，想更紧凑请改小；想更分散改大 5. 把右下角单位标注「单位：人」改成「___」 6. 把标题文字「各地区用户数排行」改成「___」 请保留长条动态增长与数值实时计数逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-horizontal-bar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-horizontal-bar

## License

MIT
