# 重点不是分析报告 (Yt Not About Analysis)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-not-about-analysis). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-not-about-analysis/b047d715d844-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-not-about-analysis.

## Usage

Copy `src/YtNotAboutAnalysis.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNotAboutAnalysis, ytNotAboutAnalysisDefaultProps } from './YtNotAboutAnalysis'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotAboutAnalysis"
      component={YtNotAboutAnalysis}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotAboutAnalysisDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene157-NotAboutAnalysis.tsx），请帮我做以下调整： 1. 修改主标题（目前是「重点不是分析点子是否有价值」） 2. 调整英文副标（目前是 "The point is NOT analyzing whether an idea has value"） 3. 更换底部结论文字（目前是「因为毫无根据和说服力」） 4. 修改崩塌方块的颜色（目前是灰色 #6B7280） 请保留原本的报告打叉、≠ 符号弹入与基座崩塌动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-not-about-analysis
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-not-about-analysis

## License

MIT
