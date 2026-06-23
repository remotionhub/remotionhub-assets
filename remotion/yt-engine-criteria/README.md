# 挑选游戏引擎的两个条件 (Yt Engine Criteria)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-engine-criteria). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-engine-criteria/5841ebe2e19b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-engine-criteria.

## Usage

Copy `src/YtEngineCriteria.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtEngineCriteria, ytEngineCriteriaDefaultProps } from './YtEngineCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineCriteria"
      component={YtEngineCriteria}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineCriteriaDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene04-EngineCriteria.tsx），请帮我做以下调整： 1. 修改两个条件的说明文字（目前是：「完全透过代码生成，不需要操作 GUI」和「GUI 介面有 MCP 可以串接更好」） 2. 调整标题文字（目前是：「挑选引擎的两个条件」） 3. 修改编号徽章的渐层颜色（目前从 #00D4AA 到 #4DA3FF） 4. 调整两个条件卡片的出场延迟（目前第一个从 frame 40 开始，第二个从 frame 120 开始） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-engine-criteria
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-engine-criteria

## License

MIT
