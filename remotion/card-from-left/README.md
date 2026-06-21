# Card From Left

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-from-left/d7b8d862073c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-from-left.

## Usage

Copy `src/CardFromLeft.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardFromLeft, cardFromLeftDefaultProps } from './CardFromLeft'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromLeft"
      component={CardFromLeft}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromLeftDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `lineColor` | `string` | `#ef4444` | CSS color for the left highlight line. |
| `titleColor` | `string` | `#fca5a5` | CSS color for the title text. |
| `backgroundColor` | `string` | `rgba(15, 23, 42, 0.92)` | CSS color for the card background block. |
| `stiffness` | `number` | `140` | Spring stiffness for the slide-in animation. | |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardFromLeft Remotion component by setting the name, title, left highlight line color, title text color, background color, and animation stiffness while preserving the slide-in animation from the left.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-from-left
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-from-left

## License

MIT
