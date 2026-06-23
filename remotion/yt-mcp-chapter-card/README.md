# MCP 章节卡片 (Yt Mcp Chapter Card)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-mcp-chapter-card). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-mcp-chapter-card/02a45fc12b65-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-mcp-chapter-card.

## Usage

Copy `src/YtMcpChapterCard.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtMcpChapterCard, ytMcpChapterCardDefaultProps } from './YtMcpChapterCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpChapterCard"
      component={YtMcpChapterCard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpChapterCardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene09-McpChapterCard.tsx），请帮我做以下调整： 1. 修改左侧标签（目前是 "PHASE 3"）与主标题（目前是 "MCP"）的文字。 2. 更换右侧两个平台图标（目前是 GitHub 与 Vercel），改成你想要的服务图标。 3. 调整 accent 色（目前是 `#00D4AA`）与 accentSecondary（目前是 `#4DA3FF`）。 4. 修改动画持续时长（目前 75 帧 / 2.5 秒）。 请保留原本的插头描边动画与连接线效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-mcp-chapter-card
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-mcp-chapter-card

## License

MIT
