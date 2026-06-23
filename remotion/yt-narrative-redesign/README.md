# 叙事式网站设计 (Yt Narrative Redesign)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-narrative-redesign). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-narrative-redesign/f3fa3c9cb696-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-narrative-redesign.

## Usage

Copy `src/YtNarrativeRedesign.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNarrativeRedesign, ytNarrativeRedesignDefaultProps } from './YtNarrativeRedesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNarrativeRedesign"
      component={YtNarrativeRedesign}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNarrativeRedesignDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene76-NarrativeRedesign.tsx），请帮我做以下调整： 1. 修改主色调（目前是橘黄色 #FFB547），改为你指定的颜色 2. 调整网站 mockup 的章节数量（目前有 4 个章节区块） 3. 修改最后出现的标签文字（目前是「叙事式设计」） 4. 调整动画总长度（目前是 6 秒 = 180 帧） 请保留原本的书本图标动画、箭头转场与网站 mockup 弹入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-narrative-redesign
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-narrative-redesign

## License

MIT
