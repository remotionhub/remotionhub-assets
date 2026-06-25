# 自制 extract.py 工具动画 (Yt Extract Tool)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-extract-tool). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-extract-tool/4f48b6fbd2ae-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-extract-tool.

## Usage

Copy `src/YtExtractTool.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtExtractTool, ytExtractToolDefaultProps } from './YtExtractTool'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExtractTool"
      component={YtExtractTool}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExtractToolDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene60-ExtractTool.tsx），请帮我做以下调整： 1. 修改工具名称（目前是 extract.py） 2. 更改终端机中显示的运行步骤文字（目前是 Fetching website、Extracting HTML/CSS 等） 3. 调整灯泡启示阶段的说明文字（目前是「参考了一些做法」） 4. 修改「自制工具」徽章的颜色（目前使用 warning #FFB547） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-extract-tool
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-extract-tool

## License

MIT
