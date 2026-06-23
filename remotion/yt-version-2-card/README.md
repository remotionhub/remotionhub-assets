# 第二版转场卡片 (Yt Version 2 Card)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-version-2-card). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-version-2-card/e6f3ed5470b3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-version-2-card.

## Usage

Copy `src/YtVersion2Card.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtVersion2Card, ytVersion2CardDefaultProps } from './YtVersion2Card'

export function RemotionRoot() {
  return (
    <Composition
      id="YtVersion2Card"
      component={YtVersion2Card}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytVersion2CardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene74-SecondVersion.tsx），请帮我做以下调整： 1. 将显示的版本数字从 2 改为其他数字（例如 4） 2. 调整主色调，目前是橘黄色渐层，改为你指定的颜色 3. 修改「第二版」标题文字为其他文字（例如「最终版」） 4. 调整动画总长度（目前是 4 秒 = 120 帧） 请保留原本的弹簧进场、眼睛图标与闪烁点动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-version-2-card
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-version-2-card

## License

MIT
