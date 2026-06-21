# Card Top Right

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-top-right/c2d614220e0a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-top-right.

## Usage

Copy `src/CardTopRight.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardTopRight, cardTopRightDefaultProps } from './CardTopRight'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTopRight"
      component={CardTopRight}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTopRightDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | `name` | `string` | `Alex Johnson` | Primary display name. |
| `title` | `string` | `Lead Engineer` | Secondary title or role. |
| `lineColor` | `string` | `#4ade80` | CSS color for the left highlight line. |
| `titleColor` | `string` | `#bbf7d0` | CSS color for the title text. |
| `backgroundColor` | `string` | `#052e16` | CSS color for the card background block. |
| `stiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |
| `textDelay` | `number` | `10` | Frame delay before the text fades in. | |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardTopRight Remotion component by setting the name, title, left highlight line color, title text color, background color, animation stiffness, and text delay while preserving the horizontal slide-in animation from the right at the top right of the viewport.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-top-right
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-top-right

## License

MIT
