# Dataviz Bubble

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-bubble/94c1791a5623-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-bubble.

## Usage

Copy `src/DatavizBubble.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizBubble, datavizBubbleDefaultProps } from './DatavizBubble'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBubble"
      component={DatavizBubble}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBubbleDefaultProps}
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
我有一个用 Remotion 写的市场分析气泡图组件（文件：BubbleChart.tsx），请帮我做以下调整： 1. 把标题从「市场分析气泡图」改成「___」 2. 把副标题从「市场规模 × 成长率 × 市占率」改成「___」 3. 在 BUBBLES 阵列中，把 X 轴标签（`label`）依序改成「___、___、…」 4. 把每个气泡的 `size` 数值依序改成「___、___、…」（数字越大圆圈越大，建议范围 10–80） 5. 把三个群组的颜色 `color` 依序改成「___、___、___」（支持任何 hex 色码） 6. 把每颗气泡的出场间隔从 8 帧改成 ___（数字越小出场越密集） 请保留原本的弹簧缩放动画与发光效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-bubble
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-bubble

## License

MIT
