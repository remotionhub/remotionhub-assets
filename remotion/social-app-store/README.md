# Social App Store

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-app-store/ff86c1a0ec23-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-app-store.

## Usage

Copy `src/SocialAppStore.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialAppStore, socialAppStoreDefaultProps } from './SocialAppStore'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialAppStore"
      component={SocialAppStore}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialAppStoreDefaultProps}
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
我有一个用 Remotion 写的 App Store 上架卡片组件（文件：AppStoreCard.tsx），请帮我做以下调整： 1. 把 App 名称从 "SuperApp" 改成「___」（修改顶部 APP-NAME 常数） 2. 把开发者名称从 "Dev Studio Inc." 改成「___」（修改顶部 DEVELOPER 常数） 3. 把评分从 "4.8" 改成「___」（修改顶部 RATING 常数） 4. 把评分人数从 "12.3k 评分" 改成「___」（修改顶部 RATING-COUNT 常数） 5. 把描述文字改成「___」（修改顶部 DESCRIPTION 常数） 6. 把版本号 VERSION 与大小 SIZE 改成你的应用程序信息 7. 把 RATING-BARS 数组中的 fill 比例改成符合你评分分布的数值（总和建议接近 1） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-app-store
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-app-store

## License

MIT
