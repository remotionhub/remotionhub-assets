# Lower Third Line Expand

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-line-expand/b9ca089bcbf2-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-line-expand.

## Usage

Copy `src/LowerThirdLineExpand.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdLineExpand, lowerThirdLineExpandDefaultProps } from './LowerThirdLineExpand'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdLineExpand"
      component={LowerThirdLineExpand}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdLineExpandDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Chief Executive Officer` | Secondary title or role. |
| `accentColor` | `string` | `#f59e0b` | CSS color for the expanding horizontal line. |
| `titleColor` | `string` | `#fcd34d` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `transparent` | CSS color for the card background. |
| `animationStiffness` | `number` | `180` | Spring stiffness for the horizontal line expanding animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdLineExpand Remotion component by setting the name, title, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the line expanding and text unfolding animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-line-expand
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-line-expand

## License

MIT
