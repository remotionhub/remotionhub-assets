# Card Typewriter

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-typewriter/2bc8c47aaf70-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-typewriter.

## Usage

Copy `src/CardTypewriter.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardTypewriter, cardTypewriterDefaultProps } from './CardTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTypewriter"
      component={CardTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTypewriterDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `accentColor` | `string` | `#ffffff` | CSS color for the left indicator line and typing cursor. |
| `titleColor` | `string` | `#a5f3fc` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#0e7490` | CSS color for the card background. |
| `charactersPerSecond` | `number` | `15` | Typewriter typing speed in characters per second. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardTypewriter Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and charactersPerSecond while preserving the typewriter typing cursor effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-typewriter
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-typewriter

## License

MIT
