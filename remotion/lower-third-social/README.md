# Lower Third Social

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-social/794eea2604b0-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-social.

## Usage

Copy `src/LowerThirdSocial.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdSocial, lowerThirdSocialDefaultProps } from './LowerThirdSocial'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdSocial"
      component={LowerThirdSocial}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdSocialDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `John Doe` | Primary display name. |
| `title` | `string` | `Developer` | Secondary title or role. |
| `handle` | `string` | `@johndoe` | Social platform handle. |
| `platform` | `string` | `𝕏` | Social platform identifier. |
| `accentColor` | `string` | `#000000` | CSS color for the social platform background. |
| `titleColor` | `string` | `#ffffff` | CSS color for the social handle text. |
| `cardBackgroundColor` | `string` | `#1f2937` | CSS color for the container background. |
| `animationStiffness` | `number` | `120` | Spring stiffness for the slide-in name animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdSocial Remotion component by setting the name, title, handle, platform, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the social tag pop animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-social
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-social

## License

MIT
