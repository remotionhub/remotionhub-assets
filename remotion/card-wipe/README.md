# Card Wipe

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-wipe/832ed4f08e7b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-wipe.

## Usage

Copy `src/CardWipe.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardWipe, cardWipeDefaultProps } from './CardWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="CardWipe"
      component={CardWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardWipeDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Sofia Rossi` | Primary display name. |
| `title` | `string` | `UX Researcher` | Secondary title or role. |
| `accentColor` | `string` | `#a5b4fc` | Accent CSS color. |
| `titleColor` | `string` | `#a5b4fc` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(49, 46, 129, 0.95)` | CSS color for the card background. |
| `wipeDurationFrames` | `number` | `30` | Duration of the wipe effect in frames. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardWipe Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and wipeDurationFrames while preserving the wipe-in clipping effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-wipe
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-wipe

## License

MIT
