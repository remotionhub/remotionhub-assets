# YouTube 按赞订阅通知动画 (Yt Like Subscribe Bell)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-like-subscribe-bell). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-like-subscribe-bell/e54a7076f08c-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-like-subscribe-bell.

## Usage

Copy `src/YtLikeSubscribeBell.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtLikeSubscribeBell, ytLikeSubscribeBellDefaultProps } from './YtLikeSubscribeBell'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLikeSubscribeBell"
      component={YtLikeSubscribeBell}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLikeSubscribeBellDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：LikeSubscribeBellScene.tsx），请帮我做以下调整： 1. 修改频道名称（目前为「Debug 土拨鼠」） 2. 调整三个互动事件的触发时间（likeStart、subStart、bellStart，目前分别为第 90、150、210 帧） 3. 替换频道头像图片路径（目前使用 `avatar-2.png`） 4. 调整订阅按钮的颜色（目前为 `#CC0000`） 请保留原本的波纹、弹跳与摇铃动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-like-subscribe-bell
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-like-subscribe-bell

## License

MIT
