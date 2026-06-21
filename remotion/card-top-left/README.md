# Card Top Left

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-top-left/6aca63ae46ee-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-top-left.

## Usage

Copy `src/CardTopLeft.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardTopLeft, cardTopLeftDefaultProps } from './CardTopLeft'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTopLeft"
      component={CardTopLeft}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTopLeftDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| | `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary title or role. |
| `lineColor` | `string` | `#38bdf8` | CSS color for the bottom highlight line. |
| `titleColor` | `string` | `#bae6fd` | CSS color for the title text. |
| `backgroundColor` | `string` | `#0f172a` | CSS color for the card background block. |
| `stiffness` | `number` | `140` | Spring stiffness for the slide-in animation. |
| `textDelay` | `number` | `10` | Frame delay before the text fades in. | |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardTopLeft Remotion component by setting the name, title, bottom highlight line color, title text color, background color, animation stiffness, and text delay while preserving the diagonal slide-in animation from the top-left.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-top-left
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-top-left

## License

MIT
