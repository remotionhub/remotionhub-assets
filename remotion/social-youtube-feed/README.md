# Social Youtube Feed

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-youtube-feed/571e17fc16e4-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-youtube-feed.

## Usage

Copy `src/SocialYoutubeFeed.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialYoutubeFeed, socialYoutubeFeedDefaultProps } from './SocialYoutubeFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialYoutubeFeed"
      component={SocialYoutubeFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialYoutubeFeedDefaultProps}
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
我有一个用 Remotion 写的 YouTube 视频墙首页组件（文件：YoutubeFeed.tsx），请帮我做以下调整： 1. 把 VIDEOS 阵列中第 N 部视频的 title / channel 改成「___」 2. 把第 N 部视频的缩图渐层从现有值改成「___」 3. 把第 N 部视频的 duration 改成「___」 4. 调整卡片弹入速度：将 cardProgressList 中的 stiffness 从 150 改大（例如 200） 5. 把观看数计数动画时间从 30 帧改成「___」帧（修改 viewProgressList 中的 start + 30） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-youtube-feed
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-youtube-feed

## License

MIT
