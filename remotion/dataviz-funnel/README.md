# Dataviz Funnel

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/dataviz-funnel/b3ca94380385-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/dataviz-funnel.

## Usage

Copy `src/DatavizFunnel.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { DatavizFunnel, datavizFunnelDefaultProps } from './DatavizFunnel'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizFunnel"
      component={DatavizFunnel}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizFunnelDefaultProps}
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
我有一个用 Remotion 写的转换漏斗组件（文件：Funnel.tsx），请帮我做以下调整： 1. 把漏斗阶段数据替换成我的数据（修改顶部 STAGES 数组，每笔包含 label、value、color） 2. 把标题从「转换漏斗分析」改成「___」（修改 JSX 中标题文字） 3. 把副标题从「电商全流程转换率概览」改成「___」 4. 调整每个阶段的最大宽度：把 MAX-WIDTH 从 900 改成「___」（数值越大梯形越宽） 5. 调整各阶段弹入速度：把 stiffness 从 110 改成「___」（越大弹入越快） 6. 把右侧转换率标示位置微调：修改 left: centerX + MAX-WIDTH / 2 + 20 中的偏移值 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/dataviz-funnel
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/dataviz-funnel

## License

MIT
