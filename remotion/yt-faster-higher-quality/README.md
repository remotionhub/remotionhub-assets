# 更快做出来，品质门槛也跟着提高 (Yt Faster Higher Quality)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-faster-higher-quality). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-faster-higher-quality/ec93380b478e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-faster-higher-quality.

## Usage

Copy `src/YtFasterHigherQuality.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFasterHigherQuality, ytFasterHigherQualityDefaultProps } from './YtFasterHigherQuality'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFasterHigherQuality"
      component={YtFasterHigherQuality}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFasterHigherQualityDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene162-FasterHigherQuality.tsx），请帮我做以下调整： 1. 修改标题文字（目前为「更快做出来，品质门槛也跟着提高」） 2. 调整左侧速度图标的主色（目前为 #4DA3FF 蓝色） 3. 调整右侧品质图标的主色（目前为 #F59E0B 琥珀色） 4. 修改英文副标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-faster-higher-quality
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-faster-higher-quality

## License

MIT
