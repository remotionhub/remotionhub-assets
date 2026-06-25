# 题目管道多，但 Distribution 很有挑战 (Yt Easy Channel Hard Dist)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-easy-channel-hard-dist). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-easy-channel-hard-dist/5de1d99d7a3f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-easy-channel-hard-dist.

## Usage

Copy `src/YtEasyChannelHardDist.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtEasyChannelHardDist, ytEasyChannelHardDistDefaultProps } from './YtEasyChannelHardDist'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEasyChannelHardDist"
      component={YtEasyChannelHardDist}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEasyChannelHardDistDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene176-EasyChannelHardDist.tsx），请帮我做以下调整： 1. 修改左侧管道列表（目前为网路陌生人、社群媒体、论坛/社团） 2. 调整右侧 Distribution 挑战的描述 3. 更改主标题文字 4. 调整左右两侧的颜色主题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-easy-channel-hard-dist
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-easy-channel-hard-dist

## License

MIT
