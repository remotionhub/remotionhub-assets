# Social Producthunt

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-producthunt/2e130c187eae-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-producthunt.

## Usage

Copy `src/SocialProducthunt.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialProducthunt, socialProducthuntDefaultProps } from './SocialProducthunt'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialProducthunt"
      component={SocialProducthunt}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialProducthuntDefaultProps}
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
我有一个用 Remotion 写的 Product Hunt 产品发布卡组件（文件：ProductHuntCard.tsx），请帮我做以下调整： 1. 把产品名称从 "AwesomeTool" 改成「___」（修改顶部 PRODUCT-NAME 常数） 2. 把产品标语改成「___」（修改顶部 TAGLINE 常数） 3. 把描述文字改成「___」（修改顶部 DESCRIPTION 常数） 4. 把标签数组 TAGS 改成你想要的标签 5. 把票数 VOTES-TARGET 改成你想要的数字 6. 把 CTA 按钮文字「前往产品页」改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-producthunt
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-producthunt

## License

MIT
