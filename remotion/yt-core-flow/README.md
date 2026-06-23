# AI 产品核心流程：输入→搜寻→AI 分析 (Yt Core Flow)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-core-flow). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-core-flow/39ff59a2ed96-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-core-flow.

## Usage

Copy `src/YtCoreFlow.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCoreFlow, ytCoreFlowDefaultProps } from './YtCoreFlow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreFlow"
      component={YtCoreFlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreFlowDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene202-CoreFlow.tsx），请帮我做以下调整： 1. 修改三个流程步骤的标题与描述 2. 调整各步骤的颜色 3. 更改主标题文字 4. 修改流程箭头的样式 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-core-flow
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-core-flow

## License

MIT
