# 乱枪打鸟：管道多但受众痛点不符 (Yt Scatter Shot)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-scatter-shot). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-scatter-shot/b72c09bd9d5b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-scatter-shot.

## Usage

Copy `src/YtScatterShot.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtScatterShot, ytScatterShotDefaultProps } from './YtScatterShot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtScatterShot"
      component={YtScatterShot}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytScatterShotDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene187-ScatterShot.tsx），请帮我做以下调整： 1. 修改左侧的乱枪打鸟管道列表 2. 调整右侧不匹配的描述文字 3. 更改主标题文字 4. 修改动画颜色主题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-scatter-shot
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-scatter-shot

## License

MIT
