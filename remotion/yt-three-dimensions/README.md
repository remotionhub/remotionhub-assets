# 三个面向拆解：Skill、工具、流程 (Yt Three Dimensions)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-three-dimensions). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-three-dimensions/ade93e36314d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-three-dimensions.

## Usage

Copy `src/YtThreeDimensions.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtThreeDimensions, ytThreeDimensionsDefaultProps } from './YtThreeDimensions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeDimensions"
      component={YtThreeDimensions}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeDimensionsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene204-ThreeDimensions.tsx），请帮我做以下调整： 1. 修改三个面向的标题（目前为 Skill、工具、流程） 2. 调整每个面向的图标与说明 3. 更改各面向的强调颜色 4. 修改主标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-three-dimensions
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-three-dimensions

## License

MIT
