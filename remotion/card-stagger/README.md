# Card Stagger

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-stagger/0eb42d1af7ec-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-stagger.

## Usage

Copy `src/CardStagger.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardStagger, cardStaggerDefaultProps } from './CardStagger'

export function RemotionRoot() {
  return (
    <Composition
      id="CardStagger"
      component={CardStagger}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardStaggerDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `tagline` | `string` | `Remotion Studio · Product Team` | Third-line tagline text. |
| `accentColor` | `string` | `#f97316` | CSS color for the left highlight line. |
| `titleColor` | `string` | `#93c5fd` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#1e3a5f` | CSS color for the card background. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the main slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardStagger Remotion component by setting the name, title, tagline, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the staggered fade-in line effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-stagger
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-stagger

## License

MIT
