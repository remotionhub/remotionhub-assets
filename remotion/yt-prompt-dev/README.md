# 根据技术规格做开发 (Yt Prompt Dev)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-prompt-dev). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-prompt-dev/10fc51a554fa-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-prompt-dev.

## Usage

Copy `src/YtPromptDev.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtPromptDev, ytPromptDevDefaultProps } from './YtPromptDev'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptDev"
      component={YtPromptDev}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptDevDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene208-PromptDev.tsx），请帮我做以下调整： 1. 修改左侧规格文件的四个模组名称 2. 调整右侧代码编辑器显示的代码内容 3. 更改主标题文字 4. 修改底部徽章的文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-prompt-dev
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-prompt-dev

## License

MIT
