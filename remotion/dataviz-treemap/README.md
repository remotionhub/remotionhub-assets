# Dataviz Treemap

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-treemap/54e777e0ab35-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-treemap.

## Usage

Copy `src/DatavizTreemap.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizTreemap, datavizTreemapDefaultProps } from './DatavizTreemap'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizTreemap"
      component={DatavizTreemap}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizTreemapDefaultProps}
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
我有一个用 Remotion 写的市场份额树状图组件（文件：Treemap.tsx），请帮我做以下调整： 1. 把标题从「市场份额树状图」改成「___」 2. 把副标题从「各产业市场占比概览」改成「___」 3. 把各区块的标签依序改成「___、___、___、___、___、___、___、___、___、___」 4. 把各区块的数值（百分比）依序改成「___、___、___、___、___、___、___、___、___、___」（总和建议为 100） 5. 把各区块的颜色依序改成「___、___、___、___、___、___、___、___、___、___」 6. 把每个区块的入场间隔从 10 帧改成 ___（数字越小出场越密集） 请保留原本的弹簧缩放动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-treemap
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-treemap

## License

MIT
