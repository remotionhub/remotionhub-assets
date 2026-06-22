# Lower Third Callout

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-callout/e8ef813104d7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-callout.

## Usage

Copy `src/LowerThirdCallout.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdCallout, lowerThirdCalloutDefaultProps } from './LowerThirdCallout'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdCallout"
      component={LowerThirdCallout}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdCalloutDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Product Feature` | Primary display name. |
| `title` | `string` | `Tap to learn more` | Secondary title or role. |
| `accentColor` | `string` | `#f59e0b` | CSS color for the subject dot and line. |
| `titleColor` | `string` | `#451a03` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#f59e0b` | CSS color for the label box background. |
| `animationStiffness` | `number` | `150` | Spring stiffness for the line drawing animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdCallout Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the dot callout line connection and text box animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-callout
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-callout

## License

MIT
