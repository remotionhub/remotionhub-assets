# Social Twitter Quote

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-twitter-quote/b7e23dacf71b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-twitter-quote.

## Usage

Copy `src/SocialTwitterQuote.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialTwitterQuote, socialTwitterQuoteDefaultProps } from './SocialTwitterQuote'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTwitterQuote"
      component={SocialTwitterQuote}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTwitterQuoteDefaultProps}
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
我有一个用 Remotion 写的 X / Twitter 语录卡组件（文件：TwitterQuote.tsx），请帮我做以下调整： 1. 把显示名称从「工程师 Kai」改成「___」，并把 @handle 从「@kai-engineer」改成「___」 2. 把语录内容改成「___」（换行请用 \n） 3. 把喜欢数从 2400 改成「___」、转推数从 891 改成「___」、浏览数从 48000 改成「___」 4. 把时间戳记从「下午 3:42 · 2025年4月9日」改成「___」 5. 把卡片背景色从 #0f0f0f 改成「___」（例如深海军蓝 #0a1628） 6. 把语录字型大小从 38px 改成「___」px 请保留原本的缩放淡入、逐行显示与数字滚动效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-twitter-quote
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-twitter-quote

## License

MIT
