# 用 Claude Code 做了 IdeaCheck 产品 (Yt Idea Check)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-idea-check). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-idea-check/c699bbb8027c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-idea-check.

## Usage

Copy `src/YtIdeaCheck.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtIdeaCheck, ytIdeaCheckDefaultProps } from './YtIdeaCheck'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaCheck"
      component={YtIdeaCheck}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaCheckDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene201-IdeaCheck.tsx），请帮我做以下调整： 1. 修改产品名称（目前为 IdeaCheck） 2. 调整产品功能描述 3. 更改主强调颜色 4. 修改开发工具的标签 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-idea-check
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-idea-check

## License

MIT
