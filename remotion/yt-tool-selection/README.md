# 工具选择标准：免费额度多且效果好 (Yt Tool Selection)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-tool-selection). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-tool-selection/4d63895cd943-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-tool-selection.

## Usage

Copy `src/YtToolSelection.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtToolSelection, ytToolSelectionDefaultProps } from './YtToolSelection'

export function RemotionRoot() {
  return (
    <Composition
      id="YtToolSelection"
      component={YtToolSelection}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytToolSelectionDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene205-ToolSelection.tsx），请帮我做以下调整： 1. 修改选工具的两个标准（目前为免费额度多、效果好） 2. 调整右侧工具选项的名称 3. 更改主标题文字 4. 修改强调颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-tool-selection
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-tool-selection

## License

MIT
