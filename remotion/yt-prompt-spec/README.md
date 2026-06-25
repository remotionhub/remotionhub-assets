# 用一段 Prompt 规划产品规格 (Yt Prompt Spec)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-prompt-spec). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-prompt-spec/51ead17062f3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-prompt-spec.

## Usage

Copy `src/YtPromptSpec.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtPromptSpec, ytPromptSpecDefaultProps } from './YtPromptSpec'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptSpec"
      component={YtPromptSpec}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptSpecDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene207-PromptSpec.tsx），请帮我做以下调整： 1. 修改 Prompt 终端机里的五行文字内容 2. 调整右侧四张功能卡片的名称与颜色 3. 更改主标题文字 4. 修改底部规格文件输出的名称 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-prompt-spec
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-prompt-spec

## License

MIT
