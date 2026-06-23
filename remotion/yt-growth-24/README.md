# 年增长 24% 数据动画卡片 (Yt Growth 24)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-growth-24). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-growth-24/30eecbeab986-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-growth-24.

## Usage

Copy `src/YtGrowth24.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtGrowth24, ytGrowth24DefaultProps } from './YtGrowth24'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGrowth24"
      component={YtGrowth24}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGrowth24DefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene161-Growth24.tsx），请帮我做以下调整： 1. 修改成长百分比数字（目前为 24%）为其他数值 2. 更改主要强调色（目前为 #10B981 绿色） 3. 调整柱状图的年份标签范围 4. 修改副标题文字「Year-over-year growth」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-growth-24
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-growth-24

## License

MIT
