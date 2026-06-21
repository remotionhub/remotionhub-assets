# Lower Third Slide

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-slide/aea404f9c0cd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-slide.

## Usage

Copy `src/LowerThirdSlide.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdSlide, lowerThirdSlideDefaultProps } from './LowerThirdSlide'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdSlide"
      component={LowerThirdSlide}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdSlideDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `John Doe` | Primary display name. |
| `title` | `string` | `Senior Product Designer` | Secondary title or role. |
| `accentColor` | `string` | `#3b82f6` | CSS color for the left highlight line. |
| `titleColor` | `string` | `#93c5fd` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `rgba(15,23,42,0.90)` | CSS color for the card background block. |
| `animationStiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdSlide Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the left slide-in animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-slide
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-slide

## License

MIT
