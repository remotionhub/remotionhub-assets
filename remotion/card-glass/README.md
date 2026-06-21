# Card Glass

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-glass/66a1d6f2971f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-glass.

## Usage

Copy `src/CardGlass.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardGlass, cardGlassDefaultProps } from './CardGlass'

export function RemotionRoot() {
  return (
    <Composition
      id="CardGlass"
      component={CardGlass}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardGlassDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `accentColor` | `string` | `#7c3aed` | Outer background gradient start color. |
| `titleColor` | `string` | `rgba(255, 255, 255, 0.75)` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(255, 255, 255, 0.12)` | CSS color for the frosted glass background block. |
| `blurAmount` | `number` | `20` | Backdrop blur amount in pixels. |
| `animationStiffness` | `number` | `120` | Spring stiffness for the rising animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardGlass Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, blurAmount, and animationStiffness while preserving the frosted glass rising effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-glass
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-glass

## License

MIT
