# 除非刚好...刚好...刚好... (Yt Too Many Coincidences)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-too-many-coincidences). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-too-many-coincidences/12e5c8d475a5-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-too-many-coincidences.

## Usage

Copy `src/YtTooManyCoincidences.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTooManyCoincidences, ytTooManyCoincidencesDefaultProps } from './YtTooManyCoincidences'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTooManyCoincidences"
      component={YtTooManyCoincidences}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTooManyCoincidencesDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene186-TooManyCoincidences.tsx），请帮我做以下调整： 1. 修改「刚好」的条件内容（可替换为其他低机率情境） 2. 调整每个条件的机率显示数字 3. 更改颜色主题 4. 修改标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-too-many-coincidences
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-too-many-coincidences

## License

MIT
