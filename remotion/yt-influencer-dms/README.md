# 网红私讯里充满粉丝问题 (Yt Influencer Dms)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-influencer-dms). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-influencer-dms/a91b9129ad72-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-influencer-dms.

## Usage

Copy `src/YtInfluencerDms.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtInfluencerDms, ytInfluencerDmsDefaultProps } from './YtInfluencerDms'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInfluencerDms"
      component={YtInfluencerDms}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInfluencerDmsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene179-InfluencerDMs.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整 DM 讯息气泡的内容文字 3. 更改手机/网红图标的颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-influencer-dms
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-influencer-dms

## License

MIT
