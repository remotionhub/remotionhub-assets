# 先问 AI 游戏名称的小撇步 (Yt Ask Ai Tip)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ask-ai-tip). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ask-ai-tip/66209a18196c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ask-ai-tip.

## Usage

Copy `src/YtAskAiTip.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAskAiTip, ytAskAiTipDefaultProps } from './YtAskAiTip'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAskAiTip"
      component={YtAskAiTip}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAskAiTipDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene15-AskAiTip.tsx），请帮我做以下调整： 1. 修改流程图三个步骤的标签（目前是：「你的描述」→「问 AI」→「精确名称」） 2. 调整底部说明文字（目前是：「先问名称，再给指令 → 省时省力」） 3. 修改灯泡图标的颜色（目前使用 warning 黄色 #FFB547） 4. 更改整体强调色（目前 accent 为 #00D4AA） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ask-ai-tip
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ask-ai-tip

## License

MIT
