# 让大家知道你正在持续稳定输出 (Yt Consistent Output)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-consistent-output). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-consistent-output/fdff4a3ac2d3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-consistent-output.

## Usage

Copy `src/YtConsistentOutput.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtConsistentOutput, ytConsistentOutputDefaultProps } from './YtConsistentOutput'

export function RemotionRoot() {
  return (
    <Composition
      id="YtConsistentOutput"
      component={YtConsistentOutput}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytConsistentOutputDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene195-ConsistentOutput.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整时间轴上的输出节点内容 3. 更改观众成长曲线的颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-consistent-output
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-consistent-output

## License

MIT
