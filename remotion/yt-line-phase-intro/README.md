# LINE 整合阶段介绍卡 (Yt Line Phase Intro)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-line-phase-intro). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-line-phase-intro/ee187c22cc6e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-line-phase-intro.

## Usage

Copy `src/YtLinePhaseIntro.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtLinePhaseIntro, ytLinePhaseIntroDefaultProps } from './YtLinePhaseIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLinePhaseIntro"
      component={YtLinePhaseIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLinePhaseIntroDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene07-LinePhaseIntro.tsx），请帮我做以下调整： 1. 修改 `CHECKLIST-ITEMS` 阵列中的标签文字，换成你自己的整合步骤清单。 2. 调整左侧标题（目前是 "LINE"）与副标题（目前是 "PHASE 2"）为你想要的名称。 3. 更改 Logo 图标（`LineLogoIcon`）的颜色或形状，使其符合你的品牌。 4. 调整背景底色（目前是 `#0B0B0F`）与 accent 色（目前是 `#00D4AA`）。 请保留原本的勾选动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-line-phase-intro
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-line-phase-intro

## License

MIT
