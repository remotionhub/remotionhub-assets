# Social Reddit Feed

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-reddit-feed/4aba743a73ba-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-reddit-feed.

## Usage

Copy `src/SocialRedditFeed.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialRedditFeed, socialRedditFeedDefaultProps } from './SocialRedditFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialRedditFeed"
      component={SocialRedditFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialRedditFeedDefaultProps}
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
我有一个用 Remotion 写的 Reddit 动态墙组件（文件：RedditFeed.tsx），请帮我做以下调整： 1. 把第 N 篇贴文的 Subreddit 从「___」改成「___」 2. 把第 N 篇贴文的标题改成「___」 3. 把第 N 篇贴文的投票数从「___」改成「___」 4. 调整卡片入场的交错延迟（目前每张间隔 18 帧） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-reddit-feed
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-reddit-feed

## License

MIT
