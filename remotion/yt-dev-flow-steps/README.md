# 开发流程四步骤动画卡片 (Yt Dev Flow Steps)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-dev-flow-steps). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-dev-flow-steps/481909b5cf34-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-dev-flow-steps.

## Usage

Copy `src/YtDevFlowSteps.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtDevFlowSteps, ytDevFlowStepsDefaultProps } from './YtDevFlowSteps'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowSteps"
      component={YtDevFlowSteps}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowStepsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：DevFlowStepsScene.tsx），请帮我做以下调整： 1. 修改四个步骤的标签文字与颜色（STEPS 阵列中的 label、icon、color） 2. 调整步骤出现的间隔帧数（STEP-DELAY，目前为 30 帧） 3. 修改卡片外框的圆角、背景色与边框颜色 4. 调整 STEP 文字标签的字体大小（目前为 20px） 请保留 SVG 描边动画与圆形环形渐入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-dev-flow-steps
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-dev-flow-steps

## License

MIT
