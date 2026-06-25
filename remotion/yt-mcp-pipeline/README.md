# MCP 部署流水线 HUD (Yt Mcp Pipeline)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-mcp-pipeline). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-mcp-pipeline/f14c013a27ae-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-mcp-pipeline.

## Usage

Copy `src/YtMcpPipeline.tsx` into your Remotion project and register it in your composition root. Also copy `src/runtime-assets.ts` which provides the runtime asset URLs required by this component.

```tsx
import { Composition } from 'remotion'
import { YtMcpPipeline, ytMcpPipelineDefaultProps } from './YtMcpPipeline'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMcpPipeline"
      component={YtMcpPipeline}
      durationInFrames={600}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMcpPipelineDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene12-McpPipeline.tsx），请帮我做以下调整： 1. 修改 `DEFAULT-STEPS` 阵列（目前是 ["Commit", "Push", "PR", "Deploy", "Ready"]）为你自己的流程步骤名称。 2. 调整各步骤完成的时间点（`STEPS.COMMIT-DONE` 等常数，单位：帧）。 3. 更换底部右侧的 Evidence Label 文字（目前是 "GitHub PR" 与 "Vercel Deploy"）。 4. 修改 HUD 的颜色方案（完成色 `#00D4AA`、进行中色 `#4DA3FF`）。 请保留原本的 HUD 滑入动画与步骤切换效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-mcp-pipeline
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-mcp-pipeline

## License

MIT
