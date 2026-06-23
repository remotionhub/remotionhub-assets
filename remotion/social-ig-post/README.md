# Social Ig Post

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-ig-post/f04af0e5bcaa-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-ig-post.

## Usage

Copy `src/SocialIgPost.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialIgPost, socialIgPostDefaultProps } from './SocialIgPost'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialIgPost"
      component={SocialIgPost}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialIgPostDefaultProps}
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
我有一个用 Remotion 写的 Instagram 帖子卡片组件（文件：IgPostCard.tsx），请帮我做以下调整： 1. 把用户名从 "remotion-dev" 改成「___」（修改顶部 USERNAME 常数） 2. 把图片占位区的渐层颜色改成「___」 3. 把点赞数上限从 1243 改成「___」（修改 LIKES-TARGET 常数） 4. 把帖子说明文字改成「___」（修改 CAPTION 常数） 5. 把评论数从 48 改成「___」（修改 COMMENT-COUNT 常数） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-ig-post
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-ig-post

## License

MIT
