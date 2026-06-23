# 触及远端陌生人的三大痛点 (Yt Far Stranger Pains)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-far-stranger-pains). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-far-stranger-pains/4d63e7af6228-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-far-stranger-pains.

## Usage

Copy `src/YtFarStrangerPains.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFarStrangerPains, ytFarStrangerPainsDefaultProps } from './YtFarStrangerPains'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangerPains"
      component={YtFarStrangerPains}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangerPainsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene177-FarStrangerPains.tsx），请帮我做以下调整： 1. 修改三个痛点的标题（目前为「触及成本高」「竞争激烈」「不在圈内」） 2. 调整每个痛点的说明文字 3. 更改主强调颜色 4. 修改各痛点的出场时间间隔 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-far-stranger-pains
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-far-stranger-pains

## License

MIT
