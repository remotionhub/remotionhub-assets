# 实验结论三点总结动画 (Yt Experiment Conclusion)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-experiment-conclusion). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-experiment-conclusion/8ac35481103d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-experiment-conclusion.

## Usage

Copy `src/YtExperimentConclusion.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtExperimentConclusion, ytExperimentConclusionDefaultProps } from './YtExperimentConclusion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExperimentConclusion"
      component={YtExperimentConclusion}
      durationInFrames={470}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExperimentConclusionDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：ConclusionScene.tsx），请帮我做以下调整： 1. 修改三个结论项目的文字（title 与 subtitle 栏位） 2. 调整三个项目的出现时间点（P1、P2、P3，目前分别为第 1、8、15 秒） 3. 修改顶部标题文字（目前为「实验结论」）与字体大小 4. 调整各项目图标的颜色（activeColor） 请保留原本的动画节奏与前项目淡化效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-experiment-conclusion
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-experiment-conclusion

## License

MIT
