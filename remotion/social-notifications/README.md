# Social Notifications

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-notifications/8d9f837aedf8-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-notifications.

## Usage

Copy `src/SocialNotifications.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialNotifications, socialNotificationsDefaultProps } from './SocialNotifications'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialNotifications"
      component={SocialNotifications}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialNotificationsDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |


## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的社群通知中心组件（文件：NotificationCenter.tsx），请帮我做以下调整： 1. 把 NOTIFS 阵列中的通知标题和说明文字改成「___」 2. 把每张卡片的出现间隔从 15 帧改成「___」帧 3. 把卡片宽度从 750px 改成「___」px 4. 把卡片从右侧滑入的起始偏移量从 300px 改成「___」px 5. 把红色角标出现时间从第 95 帧改成第「___」帧 6. 把背景颜色从 #0f0f0f 改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-notifications
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-notifications

## License

MIT
