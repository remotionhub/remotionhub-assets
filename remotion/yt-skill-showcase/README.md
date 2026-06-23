# 四技能展示：Superpowers、shadcn/ui Skills、OWASP、Trail of Bits (Yt Skill Showcase)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-skill-showcase). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-skill-showcase/671e1acaa2bd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-skill-showcase.

## Usage

Copy `src/YtSkillShowcase.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtSkillShowcase, ytSkillShowcaseDefaultProps } from './YtSkillShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSkillShowcase"
      component={YtSkillShowcase}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSkillShowcaseDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene130-SkillShowcase.tsx），请帮我做以下调整： 1. 修改四个技能的名称与编号顺序 2. 调整各技能的主题颜色 3. 更改技能 Grid 的排列方式（目前为 2×2） 4. 修改每个技能的放大展示时间长度 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-skill-showcase
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-skill-showcase

## License

MIT
