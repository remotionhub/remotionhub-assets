# 提升自己的稳定度 (Yt Build Stability)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-build-stability). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-build-stability/320d7b3f3315-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-build-stability.

## Usage

Copy `src/YtBuildStability.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtBuildStability, ytBuildStabilityDefaultProps } from './YtBuildStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildStability"
      component={YtBuildStability}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildStabilityDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene193-BuildStability.tsx），请帮我做以下调整： 1. 修改主标题文字（目前为「2. 提升自己的稳定度」） 2. 调整摇晃到稳定的动画速度 3. 更改稳定结构的颜色 4. 修改补充说明文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-build-stability
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-build-stability

## License

MIT
