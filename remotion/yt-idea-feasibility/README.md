# 点子是否可行，很困难 (Yt Idea Feasibility)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-idea-feasibility). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-idea-feasibility/dad8991ace99-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-idea-feasibility.

## Usage

Copy `src/YtIdeaFeasibility.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtIdeaFeasibility, ytIdeaFeasibilityDefaultProps } from './YtIdeaFeasibility'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaFeasibility"
      component={YtIdeaFeasibility}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaFeasibilityDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene154-IdeaFeasibility.tsx），请帮我做以下调整： 1. 修改主标题（目前是「点子是否可行，很困难」） 2. 调整灯泡的颜色（目前是橘黄色 #F59E0B） 3. 更换阻碍方块的颜色（目前是红色 #EF4444） 4. 修改底部说明文字（目前是「困难重重」） 请保留原本的灯泡弹入、问号 wobble 与三个阻碍方块依序出现动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-idea-feasibility
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-idea-feasibility

## License

MIT
