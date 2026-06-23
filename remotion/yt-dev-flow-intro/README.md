# 有了工具和 Skill，开发流程长这样 (Yt Dev Flow Intro)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-dev-flow-intro). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-dev-flow-intro/ef61409c002f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-dev-flow-intro.

## Usage

Copy `src/YtDevFlowIntro.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtDevFlowIntro, ytDevFlowIntroDefaultProps } from './YtDevFlowIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowIntro"
      component={YtDevFlowIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowIntroDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene206-DevFlowIntro.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整 Skill 和工具的标签 3. 更改汇聚箭头的颜色 4. 修改右侧「流程」的图标与文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-dev-flow-intro
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-dev-flow-intro

## License

MIT
