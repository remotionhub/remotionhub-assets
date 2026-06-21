# Lower Third Gradient Bar

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-gradient-bar/93985f8abb97-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-gradient-bar.

## Usage

Copy `src/LowerThirdGradientBar.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdGradientBar, lowerThirdGradientBarDefaultProps } from './LowerThirdGradientBar'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdGradientBar"
      component={LowerThirdGradientBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdGradientBarDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Maria Torres` | Primary display name. |
| `title` | `string` | `Head of Innovation` | Secondary title or role. |
| `accentColor` | `string` | `#06b6d4` | Indicator highlight gradient start color. |
| `titleColor` | `string` | `#a5f3fc` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(6, 182, 212, 0.18)` | CSS color for the bar background gradient start. |
| `animationStiffness` | `number` | `80` | Spring stiffness for the rising slide animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdGradientBar Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the full width bottom bar rising effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-gradient-bar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-gradient-bar

## License

MIT
