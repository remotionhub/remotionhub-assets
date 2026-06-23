# Dataviz Line Draw

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-line-draw/32594bf555e6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-line-draw.

## Usage

Copy `src/DatavizLineDraw.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizLineDraw, datavizLineDrawDefaultProps } from './DatavizLineDraw'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizLineDraw"
      component={DatavizLineDraw}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizLineDrawDefaultProps}
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
我有一个用 Remotion 写的月度趋势折线图组件（文件：LineDraw.tsx），请帮我做以下调整： 1. 把标题从「月度趋势比较」改成「___」 2. 把副标题从「系列 A 与系列 B 数据走势」改成「___」 3. 把系列 A 的数据点依序改成「___」（共 8 个数值，范围 0–100） 4. 把系列 B 的数据点依序改成「___」（共 8 个数值，范围 0–100） 5. 把 X 轴月份标签依序改成「___」（共 8 个字符串，例如周次或季度） 6. 把系列 A 的颜色从蓝色 #3b82f6 改成「___」，系列 B 从橘色 #f59e0b 改成「___」 请保留原本的描绘动画与数据点弹出效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-line-draw
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-line-draw

## License

MIT
