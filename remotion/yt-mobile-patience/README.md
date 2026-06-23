# 手机耐心只有五秒 (Yt Mobile Patience)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-mobile-patience). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-mobile-patience/f3e081675b16-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-mobile-patience.

## Usage

Copy `src/YtMobilePatience.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtMobilePatience, ytMobilePatienceDefaultProps } from './YtMobilePatience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMobilePatience"
      component={YtMobilePatience}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMobilePatienceDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene94-MobilePatience.tsx），请帮我做以下调整： 1. 修改倒数秒数（目前是 5 秒） 2. 调整两张指标卡片的文字（目前是「打得开网站」和「联络到人」） 3. 更换最后出现的标签文字（目前是「重要指标」） 4. 修改网路不稳定的说明文字（目前是「网路不稳定」） 请保留原本的手机动画、倒数动画与卡片弹入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-mobile-patience
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-mobile-patience

## License

MIT
