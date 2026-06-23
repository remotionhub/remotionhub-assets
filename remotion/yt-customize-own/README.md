# 客制化调整打造专属网站 (Yt Customize Own)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-customize-own). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-customize-own/f728e4856bda-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-customize-own.

## Usage

Copy `src/YtCustomizeOwn.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCustomizeOwn, ytCustomizeOwnDefaultProps } from './YtCustomizeOwn'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCustomizeOwn"
      component={YtCustomizeOwn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCustomizeOwnDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene63-CustomizeOwn.tsx），请帮我做以下调整： 1. 修改客制化进行中的说明文字（目前是「客制化调整中...」） 2. 更改最终网站的品牌色（目前使用 accent #00D4AA 和 accentSecondary #4DA3FF） 3. 调整徽章文字（目前是「专属于我们的网站」） 4. 修改网站 watermark 文字（目前是「YOUR WEBSITE」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-customize-own
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-customize-own

## License

MIT
