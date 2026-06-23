# Social Linkedin

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-linkedin/7bdc250ca1b6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-linkedin.

## Usage

Copy `src/SocialLinkedin.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialLinkedin, socialLinkedinDefaultProps } from './SocialLinkedin'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialLinkedin"
      component={SocialLinkedin}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialLinkedinDefaultProps}
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
我有一个用 Remotion 写的 LinkedIn 帖子卡片组件（文件：LinkedInPost.tsx），请帮我做以下调整： 1. 把发文者姓名从「王小明」改成「___」 2. 把职称从「资深前端工程师 · Acme Corp」改成「___」 3. 把帖子文字内容改成「___」 4. 把图片区的渐层色从淡蓝色改成「___」 5. 把点赞数量上限从 1234 改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-linkedin
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-linkedin

## License

MIT
