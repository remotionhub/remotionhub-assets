# 从远到近的受众分层 (Yt Far To Near)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-far-to-near). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-far-to-near/76538e53b0f9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-far-to-near.

## Usage

Copy `src/YtFarToNear.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFarToNear, ytFarToNearDefaultProps } from './YtFarToNear'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarToNear"
      component={YtFarToNear}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarToNearDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene174-FarToNear.tsx），请帮我做以下调整： 1. 修改标题文字（目前为「从远到近可以分成」） 2. 调整同心圆的颜色（远端为蓝色，近端为绿色） 3. 修改「远」「近」的标签文字 4. 调整圆圈动画的出场间隔 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-far-to-near
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-far-to-near

## License

MIT
