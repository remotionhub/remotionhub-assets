# Card From Right

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-from-right/bd1fb1c2e023-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-from-right.

## Usage

Copy `src/CardFromRight.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardFromRight, cardFromRightDefaultProps } from './CardFromRight'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromRight"
      component={CardFromRight}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromRightDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Alex Johnson` | Primary display name. |
| `title` | `string` | `Lead Engineer` | Secondary title or role. |
| `accentColor` | `string` | `#f97316` | CSS color for the right highlight line. |
| `titleColor` | `string` | `#fdba74` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(15, 23, 42, 0.92)` | CSS color for the card background block. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardFromRight Remotion component by setting the name, title, right highlight line color, title text color, background color, and animation stiffness while preserving the slide-in animation from the right and right text alignment.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-from-right
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-from-right

## License

MIT
