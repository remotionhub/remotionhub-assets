# 两大核心问题聚焦展示 (Yt Two Focus)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-two-focus). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-two-focus/ab4768c2ff50-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-two-focus.

## Usage

Copy `src/YtTwoFocus.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTwoFocus, ytTwoFocusDefaultProps } from './YtTwoFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoFocus"
      component={YtTwoFocus}
      durationInFrames={600}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoFocusDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：TwoFocusScene.tsx），请帮我做以下调整： 1. 修改两张卡片的文字内容（number 与 text 栏位） 2. 调整两张卡片出现的时间间隔（目前第二张在第 10 秒出现） 3. 修改卡片尺寸（目前为 480×480）与圆角（目前为 28px） 4. 调整卡片之间的 gap（目前为 60px） 请保留原本的 spring 动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-two-focus
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-two-focus

## License

MIT
