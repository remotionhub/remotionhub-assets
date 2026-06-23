# 中：问懂痛点的人 (Yt Mid Ask Experts)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-mid-ask-experts). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-mid-ask-experts/9f9449a0f433-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-mid-ask-experts.

## Usage

Copy `src/YtMidAskExperts.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtMidAskExperts, ytMidAskExpertsDefaultProps } from './YtMidAskExperts'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMidAskExperts"
      component={YtMidAskExperts}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMidAskExpertsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene178-MidAskExperts.tsx），请帮我做以下调整： 1. 修改五个专家节点的标签（目前为业界前辈、产品经理、资深用户、领域专家、社群 KOL） 2. 调整节点的排列角度 3. 修改主标题文字 4. 更改连线颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-mid-ask-experts
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-mid-ask-experts

## License

MIT
