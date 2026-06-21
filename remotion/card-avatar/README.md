# Card Avatar

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/card-avatar/15c7ad983dc4-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/card-avatar.

## Usage

Copy `src/CardAvatar.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { CardAvatar, cardAvatarDefaultProps } from './CardAvatar'

export function RemotionRoot() {
  return (
    <Composition
      id="CardAvatar"
      component={CardAvatar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardAvatarDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `Jane Smith` | Primary display name. |
| `title` | `string` | `Creative Director` | Secondary role or title. |
| `avatarBorderColor` | `string` | `#a78bfa` | CSS color for the avatar border. |
| `avatarBackgroundColor` | `string` | `#312e81` | CSS color for the avatar circle background. |
| `avatarTextColor` | `string` | `#a78bfa` | CSS color for the avatar initials. |
| `titleColor` | `string` | `#c4b5fd` | CSS color for the title text. |
| `avatarStiffness` | `number` | `160` | Spring stiffness for the avatar pop-in animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the CardAvatar Remotion component by setting the display name, title, avatar border color, avatar background color, avatar initials color, title color, and avatar spring stiffness while preserving the circular avatar layout and automatic initials generation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-avatar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-avatar

## License

MIT
