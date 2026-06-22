# Logo Badge Unfold

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-badge-unfold/9ca8ecd8c073-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-badge-unfold.

## Usage

Copy `src/LogoBadgeUnfold.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoBadgeUnfold, logoBadgeUnfoldDefaultProps } from './LogoBadgeUnfold'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoBadgeUnfold"
      component={LogoBadgeUnfold}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoBadgeUnfoldDefaultProps}
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
我有一个用 Remotion 写的徽章展开 Logo 动画组件（文件：LogoBadgeUnfold.tsx），请帮我做以下调整： 1. 把徽章底色从深蓝 #1e3a5f 改成「___」 2. 把外圈描边颜色从金色 #f59e0b 改成「___」 3. 把品牌缩写从 "AC" 改成「___」（建议 2-3 个字母） 4. 把品牌全名从 "ACME CORP" 改成「___」（全大写效果最佳） 5. 把年份从 "EST. 2024" 改成「___」，或删除此行 6. 调整徽章尺寸：默认直径 280px，可等比例缩放（同步修改 SVG width/height、circle r 值） 7. 调整外圈描边速度：frame [20, 70] 可改成 [20, 50]（更快）或 [20, 90]（更慢） 请保留圆形徽章的视觉结构与动画序列，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-badge-unfold
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-badge-unfold

## License

MIT
