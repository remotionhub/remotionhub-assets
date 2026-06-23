# AI 套壳产品为什么死光？ (Yt Ai Wrappers Dead)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-wrappers-dead). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-wrappers-dead/c1dd02ae55ea-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-wrappers-dead.

## Usage

Copy `src/YtAiWrappersDead.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiWrappersDead, ytAiWrappersDeadDefaultProps } from './YtAiWrappersDead'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiWrappersDead"
      component={YtAiWrappersDead}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiWrappersDeadDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene152-AiWrappersDead.tsx），请帮我做以下调整： 1. 修改主标题（目前是「替代品很多，AI 套壳产品为什么死光？」） 2. 调整竞品方块的数量（目前是 11 个） 3. 更换崩溃后的底部文字（目前是「没有理由使用我的服务」） 4. 修改墓碑的数量（目前是 6 个） 请保留原本的方块弹入、我有 AI 大家也有 AI 标签、打叉崩溃与墓碑出现动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-wrappers-dead
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-wrappers-dead

## License

MIT
