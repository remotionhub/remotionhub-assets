# 要促成第一笔 KOL 合作不容易 (Yt First Deal Hard)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-first-deal-hard). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-first-deal-hard/7ac8f3b9d17e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-first-deal-hard.

## Usage

Copy `src/YtFirstDealHard.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFirstDealHard, ytFirstDealHardDefaultProps } from './YtFirstDealHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstDealHard"
      component={YtFirstDealHard}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstDealHardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene183-FirstDealHard.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整左侧「空白作品集」的视觉呈现 3. 修改右侧「信任桥梁」的描述 4. 更改强调颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-first-deal-hard
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-first-deal-hard

## License

MIT
