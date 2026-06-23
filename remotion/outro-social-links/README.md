# Outro Social Links

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-social-links/e52459a1a844-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-social-links.

## Usage

Copy `src/OutroSocialLinks.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroSocialLinks, outroSocialLinksDefaultProps } from './OutroSocialLinks'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSocialLinks"
      component={OutroSocialLinks}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSocialLinksDefaultProps}
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
我有一个用 Remotion 写的社群连结片尾组件（文件：SocialLinksOutro.tsx），请帮我做以下调整： 1. 把标题从 `追踪我们` 改成「___」 2. 把 YouTube 帐号从 `@mychannel` 改成「___」 3. 把 Instagram 帐号从 `@myinsta` 改成「___」 4. 把 Twitter/X 帐号从 `@mytwitter` 改成「___」 5. 把 GitHub 帐号从 `@mygithub` 改成「___」 6. 把背景渐层从 `linear-gradient(180deg, #0f172a 0%, #1e1b4b 100%)` 改成「___」 请保留原本的交错弹簧动画与淡出逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-social-links
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-social-links

## License

MIT
