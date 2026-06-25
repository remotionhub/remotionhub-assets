# 六工具展示：Cloudflare、GitHub、Lemon Squeezy、Resend、Tavily、Gemini (Yt Tool Showcase)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-tool-showcase). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-tool-showcase/edbddcb25b7d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-tool-showcase.

## Usage

Copy `src/YtToolShowcase.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtToolShowcase, ytToolShowcaseDefaultProps } from './YtToolShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolShowcase"
      component={YtToolShowcase}
      durationInFrames={900}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolShowcaseDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene129-ToolShowcase.tsx），请帮我做以下调整： 1. 修改六个工具的名称与编号顺序 2. 调整各工具的主题颜色 3. 更改工具 Grid 的排列方式（目前为 3×2） 4. 修改每个工具的放大展示时间长度 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-tool-showcase
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-tool-showcase

## License

MIT
