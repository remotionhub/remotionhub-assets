# AI 报告未必有用 (Yt Ai Report Doubt)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-report-doubt). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-report-doubt/b74c7ae47d6b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-report-doubt.

## Usage

Copy `src/YtAiReportDoubt.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiReportDoubt, ytAiReportDoubtDefaultProps } from './YtAiReportDoubt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReportDoubt"
      component={YtAiReportDoubt}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReportDoubtDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene151-AiReportDoubt.tsx），请帮我做以下调整： 1. 修改主标题文字（目前是「AI 给的报告未必是有用资讯」） 2. 调整英文副标（目前是 "AI-generated reports aren't necessarily useful information"） 3. 更换怀疑标记的颜色（目前是红色 #EF4444） 4. 修改 AI 机器人的颜色（目前是蓝色 #4DA3FF） 请保留原本的机器人动画、箭头飞向报告与问号叠加动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-report-doubt
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-report-doubt

## License

MIT
