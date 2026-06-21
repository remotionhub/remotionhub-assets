# Lower Third Box Pop

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-box-pop/4df2b1855220-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-box-pop.

## Usage

Copy `src/LowerThirdBoxPop.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdBoxPop, lowerThirdBoxPopDefaultProps } from './LowerThirdBoxPop'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdBoxPop"
      component={LowerThirdBoxPop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdBoxPopDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Alex Chen` | Primary display name. |
| `title` | `string` | `Lead Engineer` | Secondary title or role. |
| `accentColor` | `string` | `#ffffff` | Accent CSS color. |
| `titleColor` | `string` | `#ddd6fe` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#7c3aed` | CSS color for the pop-up background block. |
| `animationStiffness` | `number` | `200` | Spring stiffness for the pop-up scale animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdBoxPop Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the left-bottom scaling pop-up effect.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-box-pop
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-box-pop

## License

MIT
