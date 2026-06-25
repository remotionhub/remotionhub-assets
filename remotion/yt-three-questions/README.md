# 三大 AI 设计情境逐步揭示 (Yt Three Questions)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-three-questions). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-three-questions/80780295a37d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-three-questions.

## Usage

Copy `src/YtThreeQuestions.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtThreeQuestions, ytThreeQuestionsDefaultProps } from './YtThreeQuestions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeQuestions"
      component={YtThreeQuestions}
      durationInFrames={630}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeQuestionsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：ThreeQuestionsScene.tsx），请帮我做以下调整： 1. 修改三张卡片的文字内容（number、title、text 三个栏位） 2. 调整每张卡片出现的间隔时间（目前每 10 秒一张） 3. 修改卡片的圆角、边框颜色与背景色 4. 调整卡片宽度（目前为 1400px）与 padding 请保留原本的 spring 弹跳与淡入动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-three-questions
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-three-questions

## License

MIT
