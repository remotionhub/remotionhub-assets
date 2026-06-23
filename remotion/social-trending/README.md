# Social Trending

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-trending/b21d31dfde23-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-trending.

## Usage

Copy `src/SocialTrending.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialTrending, socialTrendingDefaultProps } from './SocialTrending'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTrending"
      component={SocialTrending}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTrendingDefaultProps}
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
我有一个用 Remotion 写的热门话题墙组件（文件：TrendingHashtags.tsx），请帮我做以下调整： 1. 把第 N 个话题的 Hashtag 从「___」改成「___」 2. 把第 N 个话题的类别从「___」改成「___」 3. 把第 N 个话题的贴文数从「___」改成「___」 4. 把第 N 个话题的 hot 状态从 true/false 改成 false/true 5. 调整标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-trending
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-trending

## License

MIT
