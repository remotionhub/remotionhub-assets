# 不需要建 3D 模型，固定动画就够了 (Yt No 3d Needed)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-no-3d-needed). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-no-3d-needed/c75e15e1a54f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-no-3d-needed.

## Usage

Copy `src/YtNo3dNeeded.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNo3dNeeded, ytNo3dNeededDefaultProps } from './YtNo3dNeeded'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNo3dNeeded"
      component={YtNo3dNeeded}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNo3dNeededDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene65-No3DNeeded.tsx），请帮我做以下调整： 1. 修改禁止标签文字（目前是「不需要建 3D 模型」） 2. 更改固定动画徽章文字（目前是「固定动画就够了」） 3. 调整 3D 立方体的颜色（目前使用 accentSecondary #4DA3FF） 4. 修改播放器标题（目前是「Animation.mp4」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-no-3d-needed
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-no-3d-needed

## License

MIT
