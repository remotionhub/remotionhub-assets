# Card Outline

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-outline/12f867dc2fb7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-outline.

## Usage

Copy `src/CardOutline.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardOutline, cardOutlineDefaultProps } from './CardOutline'

export function RemotionRoot() {
  return (
    <Composition
      id="CardOutline"
      component={CardOutline}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardOutlineDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `outlineColor` | `string` | `#f59e0b` | CSS color for the border outline and left highlight line. |
| `titleColor` | `string` | `#fcd34d` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `transparent` | CSS color for the card background. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardOutline Remotion component by setting the name, title, outlineColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the transparent outline border slide-in effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-outline
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-outline

## License

MIT
