# Social Reddit

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-reddit/cb6e3513136b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-reddit.

## Usage

Copy `src/SocialReddit.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialReddit, socialRedditDefaultProps } from './SocialReddit'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialReddit"
      component={SocialReddit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialRedditDefaultProps}
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
我有一个用 Remotion 写的 Reddit 贴文卡片组件（文件：RedditPost.tsx），请帮我做以下调整： 1. 把 Subreddit 从「r/webdev」改成「___」 2. 把发文者从「u/remotion-fan」改成「___」 3. 把贴文标题改成「___」 4. 把链结预览的网址从「remotion.dev」改成「___」 5. 把投票数上限从 4200 改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-reddit
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-reddit

## License

MIT
