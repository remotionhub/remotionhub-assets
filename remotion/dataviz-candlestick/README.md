# Dataviz Candlestick

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-candlestick/f5175c18ba1e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-candlestick.

## Usage

Copy `src/DatavizCandlestick.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizCandlestick, datavizCandlestickDefaultProps } from './DatavizCandlestick'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizCandlestick"
      component={DatavizCandlestick}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizCandlestickDefaultProps}
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
我有一个用 Remotion 写的股票走势图组件（文件：CandlestickChart.tsx），请帮我做以下调整： 1. 把 CANDLES 数组里的 10 笔 OHLC 数据换成我自己的股价数据（open/high/low/close/volume） 2. 把 PRICE-MIN 和 PRICE-MAX 调整成符合新数据的合理区间 3. 把 PRICE-LABELS 数组换成对应新区间的刻度值（例如 [100, 110, 120, 130, 140]） 4. 把标题「股票走势图」改成「___」，副标题「近十个交易日 K 线图与成交量」改成「___」 5. 把看涨蜡烛的颜色从绿色 #22c55e 改成「___」，看跌蜡烛从红色 #ef4444 改成「___」 6. 调整蜡烛出场节奏：把每根蜡烛的间隔从 index * 8 改成 index * ___（数字越小越密集） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-candlestick
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-candlestick

## License

MIT
