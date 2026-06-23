# 股权设计让 KOL 持续推广 (Yt Equity Design)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-equity-design). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-equity-design/b18c1e942da3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-equity-design.

## Usage

Copy `src/YtEquityDesign.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtEquityDesign, ytEquityDesignDefaultProps } from './YtEquityDesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEquityDesign"
      component={YtEquityDesign}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEquityDesignDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene184-EquityDesign.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整股权比例数字 3. 更改圆饼图的颜色 4. 修改循环推广的标签文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-equity-design
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-equity-design

## License

MIT
