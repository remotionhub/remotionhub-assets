# 使用 AI 工具学到的两件事 (Yt Two Lessons)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-two-lessons). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-two-lessons/6d33c86bbed4-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-two-lessons.

## Usage

Copy `src/YtTwoLessons.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTwoLessons, ytTwoLessonsDefaultProps } from './YtTwoLessons'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoLessons"
      component={YtTwoLessons}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoLessonsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene54-TwoLessons.tsx），请帮我做以下调整： 1. 修改两个重点的标题（目前是「随意下 Prompt」和「要透过 Skill 的方式」） 2. 更改副标说明文字（目前是「→ 做出 2014 年以前风格的网站」和「→ 才能再优化网站的风格」） 3. 调整两个卡片的颜色（目前第一个 danger #FF6B6B，第二个 accent #00D4AA） 4. 修改标题文字（目前是「学到两件事」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-two-lessons
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-two-lessons

## License

MIT
