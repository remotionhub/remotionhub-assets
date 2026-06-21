# Card Scale

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-scale/95a290715a5c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-scale.

## Usage

Copy `src/CardScale.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardScale, cardScaleDefaultProps } from './CardScale'

export function RemotionRoot() {
  return (
    <Composition
      id="CardScale"
      component={CardScale}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardScaleDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Liam Park` | Primary display name. |
| `title` | `string` | `Full-Stack Developer` | Secondary title or role. |
| `accentColor` | `string` | `#86efac` | Accent CSS color. |
| `titleColor` | `string` | `#86efac` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(5, 46, 22, 0.95)` | CSS color for the card background. |
| `animationStiffness` | `number` | `200` | Spring stiffness for the pop-up scale animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardScale Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the pop-up scaling effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-scale
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-scale

## License

MIT
