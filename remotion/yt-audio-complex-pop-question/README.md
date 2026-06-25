# 复杂流行音乐能改编吗？ (Yt Audio Complex Pop Question)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-audio-complex-pop-question). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-audio-complex-pop-question/8634ded6a55f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-audio-complex-pop-question.

## Usage

Copy `src/YtAudioComplexPopQuestion.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAudioComplexPopQuestion, ytAudioComplexPopQuestionDefaultProps } from './YtAudioComplexPopQuestion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioComplexPopQuestion"
      component={YtAudioComplexPopQuestion}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioComplexPopQuestionDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene20-ComplexPopQuestion.tsx），请帮我做以下调整： 1. 修改左侧标签（目前是 "简单音乐"）与状态标签（目前是 "可以改编"）。 2. 修改右侧标题（目前是 "复杂流行音乐"）与疑问标签（目前是 "是否可行？"）。 3. 调整中间过渡文字（目前是 "那..."）。 4. 更换问号颜色（目前是 `#FFB547` 警告橘）与复杂波形的层数颜色。 请保留原本的左右滑入动画与问号脉冲效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-audio-complex-pop-question
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-audio-complex-pop-question

## License

MIT
