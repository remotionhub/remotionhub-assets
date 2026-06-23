# Social Tiktok

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-tiktok/7fde308d905a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-tiktok.

## Usage

Copy `src/SocialTiktok.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialTiktok, socialTiktokDefaultProps } from './SocialTiktok'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTiktok"
      component={SocialTiktok}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTiktokDefaultProps}
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
我有一个用 Remotion 写的 TikTok 视频贴文卡组件（文件：TiktokCard.tsx），请帮我做以下调整： 1. 把显示名称从 "Remotion 创作者" 改成「___」（修改顶部 DISPLAY-NAME 常数） 2. 把帐号 handle 从 "@remotion-creator" 改成「___」（修改 HANDLE 常数） 3. 把说明文字改成「___」（修改 DESCRIPTION 常数） 4. 把音乐名称从 "原创音乐 - 创作者名称" 改成「___」（修改 MUSIC-TEXT 常数） 5. 把按赞数上限从 23400 改成「___」（修改 LIKES-TARGET 常数） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-tiktok
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-tiktok

## License

MIT
