# Lower Third Minimal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-minimal/9a9a7d83da91-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-minimal.

## Usage

Copy `src/LowerThirdMinimal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdMinimal, lowerThirdMinimalDefaultProps } from './LowerThirdMinimal'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdMinimal"
      component={LowerThirdMinimal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdMinimalDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Sarah Park` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `accentColor` | `string` | `#e4e4e7` | CSS color for the horizontal separator line. |
| `titleColor` | `string` | `#a1a1aa` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `transparent` | CSS color for the card background. |
| `animationStiffness` | `number` | `80` | Spring stiffness for the rising animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdMinimal Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the clean fading rise animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-minimal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-minimal

## License

MIT
