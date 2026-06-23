# Social Facebook

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-facebook/7220ced71a23-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-facebook.

## Usage

Copy `src/SocialFacebook.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialFacebook, socialFacebookDefaultProps } from './SocialFacebook'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialFacebook"
      component={SocialFacebook}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialFacebookDefaultProps}
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
我有一个用 Remotion 写的 Facebook 帖子卡片组件（文件：FacebookPost.tsx），请帮我做以下调整： 1. 把发文者姓名从「陈小华」改成「___」 2. 把帖子内容改成「___」 3. 把图片区的渐层从蓝紫色改成「___」 4. 把反应计数上限从 1200 改成「___」 5. 把评论数和分享数从「234 条评论 · 56 次分享」改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-facebook
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-facebook

## License

MIT
