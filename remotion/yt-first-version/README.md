# 先来看第一版 (Yt First Version)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-first-version). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-first-version/d80478d36679-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-first-version.

## Usage

Copy `src/YtFirstVersion.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFirstVersion, ytFirstVersionDefaultProps } from './YtFirstVersion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstVersion"
      component={YtFirstVersion}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstVersionDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene73-FirstVersion.tsx），请帮我做以下调整： 1. 修改主标题文字（目前是「第一版」） 2. 更改数字「1」的渐层色（目前是从 accent #00D4AA 到 accentSecondary #4DA3FF） 3. 调整装饰环的样式（目前使用虚线圆环） 4. 修改眼睛图标的颜色（目前使用与数字相同的渐层） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-first-version
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-first-version

## License

MIT
