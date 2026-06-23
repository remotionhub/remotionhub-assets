# Social Twitter Feed

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-twitter-feed/a7b1e2304e72-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-twitter-feed.

## Usage

Copy `src/SocialTwitterFeed.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialTwitterFeed, socialTwitterFeedDefaultProps } from './SocialTwitterFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTwitterFeed"
      component={SocialTwitterFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTwitterFeedDefaultProps}
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
我有一个用 Remotion 写的 X / Twitter 动态时间轴组件（文件：TwitterFeed.tsx），请帮我做以下调整： 1. 把 TWEETS 阵列中第 N 则推文的 name / handle / text 改成「___」 2. 把第 N 则推文的 verified 从 true 改成 false（或反之） 3. 把卡片背景色从 #16181c 改成「___」 4. 调整滑入速度：将 cardProgressList 中的 stiffness 从 150 改大（例如 200）让入场更快 5. 把统计数字计数的时间从 35 帧改成「___」帧（修改 statsProgressList 中的 start + 35） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-twitter-feed
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-twitter-feed

## License

MIT
