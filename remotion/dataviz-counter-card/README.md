# Dataviz Counter Card

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-counter-card/46a74e33f90c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-counter-card.

## Usage

Copy `src/DatavizCounterCard.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizCounterCard, datavizCounterCardDefaultProps } from './DatavizCounterCard'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizCounterCard"
      component={DatavizCounterCard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizCounterCardDefaultProps}
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
我有一个用 Remotion 写的统计数字卡片组件（文件：CounterCard.tsx），请帮我做以下调整： 1. 把三张卡片的标签、数值与单位改成「___」（修改顶部 CARDS 阵列中各对象的 label、value、unit） 2. 把趋势文字从现有的百分比改成「___」（修改 trend 栏位） 3. 把各卡片的强调色从现有颜色改成「___」（修改 color 栏位，格式为 hex） 4. 调整卡片弹入延迟：想更紧凑请把 startFrame 的间距从 index * 20 改小；想更分散改大 5. 调整数字计数动画范围：目前从 frame 30 计到 frame 90，可改为「___」至「___」 6. 把标题文字「核心业绩概览」改成「___」 请保留数字计数与弹入动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-counter-card
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-counter-card

## License

MIT
