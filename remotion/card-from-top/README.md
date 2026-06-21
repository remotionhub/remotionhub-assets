# Card From Top

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-from-top/ada992b63a26-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-from-top.

## Usage

Copy `src/CardFromTop.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardFromTop, cardFromTopDefaultProps } from './CardFromTop'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromTop"
      component={CardFromTop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromTopDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | `name` | `string` | `Maria Chen` | Primary display name. |
| `title` | `string` | `Motion Designer` | Secondary title or role. |
| `lineColor` | `string` | `#f59e0b` | CSS color for the bottom highlight line. |
| `titleColor` | `string` | `#fde68a` | CSS color for the title text. |
| `backgroundColor` | `string` | `rgba(15, 23, 42, 0.92)` | CSS color for the card background block. |
| `stiffness` | `number` | `140` | Spring stiffness for the slide-in animation. | |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardFromTop Remotion component by setting the name, title, bottom highlight line color, title text color, background color, and animation stiffness while preserving the slide-in animation from the top.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-from-top
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-from-top

## License

MIT
