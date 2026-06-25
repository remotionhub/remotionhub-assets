# 页面卷动完成率漏斗 (Yt Page Scroll Metrics)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-page-scroll-metrics). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-page-scroll-metrics/72f746775154-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-page-scroll-metrics.

## Usage

Copy `src/YtPageScrollMetrics.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtPageScrollMetrics, ytPageScrollMetricsDefaultProps } from './YtPageScrollMetrics'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPageScrollMetrics"
      component={YtPageScrollMetrics}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPageScrollMetricsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene88-PageScrollMetrics.tsx），请帮我做以下调整： 1. 修改顶部漏斗的人数（目前是 1000）与底部人数（目前是 320） 2. 调整完成率数字（目前显示 32%） 3. 更换顶部与底部的说明文字（目前是「点进页面的人」和「滑到底部的人」） 4. 修改颜色主题（顶部蓝色 #4DA3FF，底部橘黄 #FFB547） 请保留原本的计数器动画、漏斗 SVG 形状与卷轴动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-page-scroll-metrics
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-page-scroll-metrics

## License

MIT
