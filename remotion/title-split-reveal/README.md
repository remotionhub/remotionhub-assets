# Title Split Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-split-reveal/90598ce7b5cb-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-split-reveal.

## Usage

Copy `src/TitleSplitReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleSplitReveal, titleSplitRevealDefaultProps } from './TitleSplitReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleSplitReveal"
      component={TitleSplitReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleSplitRevealDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `topText` | `string` | `SPLIT` | Text displayed in the top half. |
| `bottomText` | `string` | `REVEAL` | Text displayed in the bottom half. |
| `fontSize` | `number` | `140` | Font size of the text. |
| `topTextColor` | `string` | `#ffffff` | CSS color for top text. |
| `bottomTextColor` | `string` | `#f59e0b` | CSS color for bottom text. |
| `dividerColor` | `string` | `#f59e0b` | CSS color for the middle dividing line. |
| `backgroundColor` | `string` | `#111827` | CSS color of the background. |
| `lineWidthMax` | `number` | `700` | Maximum width of the divider line in pixels. |
| `stiffnessLine` | `number` | `200` | Stiffness for the divider line animation. |
| `dampingLine` | `number` | `30` | Damping for the divider line animation. |
| `stiffnessReveal` | `number` | `100` | Stiffness for the text sliding reveal animation. |
| `dampingReveal` | `number` | `20` | Damping for the text sliding reveal animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的分割揭示字卡组件（文件：SplitRevealTitle.tsx），请帮我做以下调整： 1. 把上方文字从 "SPLIT" 改成「___」 2. 把下方文字从 "REVEAL" 改成「___」 3. 把中间分割线的颜色从琥珀色 #f59e0b 改成「___」 4. 把下方文字的颜色从琥珀色 #f59e0b 改成「___」 5. 把背景色从深灰 #111827 改成「___」 6. 把字体大小从 140px 改成 ___px 请保留原本的分割线展开 → 文字上下分离的入场效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-split-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-split-reveal

## License

MIT
