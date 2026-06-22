# Card Two Tone

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-two-tone/373967feb129-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-two-tone.

## Usage

Copy `src/CardTwoTone.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardTwoTone, cardTwoToneDefaultProps } from './CardTwoTone'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTwoTone"
      component={CardTwoTone}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTwoToneDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `primaryColor` | `string` | `#f97316` | CSS color for the left decorative block. |
| `secondaryColor` | `string` | `#1e1b4b` | CSS color for the main right card background. |
| `textColor` | `string` | `#ffffff` | CSS color for the primary name text. |
| `titleColor` | `string` | `#fb923c` | CSS color for the title text. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardTwoTone Remotion component by setting the name, title, primaryColor, secondaryColor, textColor, titleColor, and animationStiffness while preserving the two-tone highlight structure.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-two-tone
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-two-tone

## License

MIT
