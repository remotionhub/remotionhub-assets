# Card Elastic

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-elastic/faf3b34d543a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-elastic.

## Usage

Copy `src/CardElastic.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardElastic, cardElasticDefaultProps } from './CardElastic'

export function RemotionRoot() {
  return (
    <Composition
      id="CardElastic"
      component={CardElastic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardElasticDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Emma Torres` | Primary display name. |
| `title` | `string` | `Art Director` | Secondary title or role. |
| `accentColor` | `string` | `#fda4af` | CSS color for the left highlight line. |
| `titleColor` | `string` | `#fecdd3` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#e11d48` | CSS color for the card background. |
| `animationStiffness` | `number` | `180` | Spring stiffness for the slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardElastic Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the elastic slide-in effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-elastic
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-elastic

## License

MIT
