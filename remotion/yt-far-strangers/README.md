# 远：痛点来源于网路上的陌生人 (Yt Far Strangers)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-far-strangers). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-far-strangers/150c87be5dd3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-far-strangers.

## Usage

Copy `src/YtFarStrangers.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFarStrangers, ytFarStrangersDefaultProps } from './YtFarStrangers'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangers"
      component={YtFarStrangers}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangersDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene175-FarStrangers.tsx），请帮我做以下调整： 1. 修改主标题（目前为「远：痛点来源于网路上的陌生人」） 2. 调整散布节点的数量与颜色 3. 修改副标题文字 4. 调整地球仪的颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-far-strangers
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-far-strangers

## License

MIT
