# Social Ig Masonry

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-ig-masonry/698b049bcd9e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-ig-masonry.

## Usage

Copy `src/SocialIgMasonry.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialIgMasonry, socialIgMasonryDefaultProps } from './SocialIgMasonry'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialIgMasonry"
      component={SocialIgMasonry}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialIgMasonryDefaultProps}
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
我有一个用 Remotion 写的 Instagram 九宫格瀑布墙组件（文件：IgMasonryWall.tsx），请帮我做以下调整： 1. 把顶部个人数据的使用者名称从 "your-profile" 改成「___」 2. 把追踪者数字从 "12.4K" 改成「___」、追踪中数字从 "892" 改成「___」 3. 把 POSTS 阵列中第 N 则贴文的渐层色从现有值改成「___」 4. 把磁砖的弹入速度调快：将 tileProgressList 中的 stiffness 从 160 改大（例如 220） 5. 把发光巡回速度调慢：将 Math.floor((frame - 80) / 15) 中的 15 改大（例如 25） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-ig-masonry
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-ig-masonry

## License

MIT
