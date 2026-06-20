# Card Avatar

![Preview](https://assets.remotionhub.ai/showcase/card-avatar/15c7ad983dc4-thumb.jpg)

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
我有一个用 Remotion 写的头像字卡组件（文件：CardAvatar.tsx），请帮我做以下调整： 1. 把姓名从 "Jane Smith" 改成「___」（修改顶部 NAME 常数，缩写会自动更新） 2. 把头衔从 "Creative Director" 改成「___」（修改顶部 TITLE 常数） 3. 把头像圆圈边框颜色从紫 #a78bfa 改成「___」 4. 把头像圆圈背景从深紫 #312e81 改成「___」 5. 把头像缩写文字颜色从紫 #a78bfa 改成「___」 6. 把头衔文字颜色从淡紫 #c4b5fd 改成「___」 7. 调整头像弹入速度：想更快请把 avatarProgress 的 stiffness 从 160 改大；想更慢改小 请保留圆形头像与缩写自动计算逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/card-avatar
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/card-avatar

## License

MIT
