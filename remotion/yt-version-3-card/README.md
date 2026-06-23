# 第三版转场卡片 (Yt Version 3 Card)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-version-3-card). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-version-3-card/e5ee0fb6b9a6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-version-3-card.

## Usage

Copy `src/YtVersion3Card.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtVersion3Card, ytVersion3CardDefaultProps } from './YtVersion3Card'

export function RemotionRoot() {
  return (
    <Composition
      id="YtVersion3Card"
      component={YtVersion3Card}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytVersion3CardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene75-ThirdVersion.tsx），请帮我做以下调整： 1. 将显示的版本数字从 3 改为其他数字 2. 调整主色调，目前是紫色系，改为你指定的颜色 3. 修改「第三版」标题文字为其他文字 4. 调整眼睛图标大小（目前是 72x72） 请保留原本的弹簧进场、装饰圆环与闪烁点动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-version-3-card
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-version-3-card

## License

MIT
