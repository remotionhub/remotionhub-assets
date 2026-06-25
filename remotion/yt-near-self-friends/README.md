# 近：从自己和亲友出发 (Yt Near Self Friends)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-near-self-friends). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-near-self-friends/3fd411869270-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-near-self-friends.

## Usage

Copy `src/YtNearSelfFriends.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNearSelfFriends, ytNearSelfFriendsDefaultProps } from './YtNearSelfFriends'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNearSelfFriends"
      component={YtNearSelfFriends}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNearSelfFriendsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene185-NearSelfFriends.tsx），请帮我做以下调整： 1. 修改主标题文字（目前为「近：从自己和亲友」） 2. 调整亲友节点的标签（目前为固定位置排列） 3. 更改连线颜色 4. 修改中心节点的颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-near-self-friends
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-near-self-friends

## License

MIT
