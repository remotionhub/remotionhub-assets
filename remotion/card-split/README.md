# Card Split

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-split/0a2b8f5ad059-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-split.

## Usage

Copy `src/CardSplit.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardSplit, cardSplitDefaultProps } from './CardSplit'

export function RemotionRoot() {
  return (
    <Composition
      id="CardSplit"
      component={CardSplit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardSplitDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `David Kim` | Primary display name. |
| `title` | `string` | `Brand Strategist` | Secondary title or role. |
| `leftColor` | `string` | `rgba(46, 16, 101, 0.95)` | CSS color for the name block background. |
| `rightColor` | `string` | `rgba(88, 28, 135, 0.90)` | CSS color for the title block background. |
| `textColor` | `string` | `#d8b4fe` | CSS color for the title text. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the entrance animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardSplit Remotion component by setting the name, title, leftColor, rightColor, textColor, and animationStiffness while preserving the split opening animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-split
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-split

## License

MIT
