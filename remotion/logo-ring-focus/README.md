# Logo Ring Focus

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-ring-focus/40e834c1c2f5-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-ring-focus.

## Usage

Copy `src/LogoRingFocus.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoRingFocus, logoRingFocusDefaultProps } from './LogoRingFocus'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoRingFocus"
      component={LogoRingFocus}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoRingFocusDefaultProps}
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
我有一个用 Remotion 写的光圈聚焦 Logo 动画组件（文件：LogoRingFocus.tsx），请帮我做以下调整： 1. 把圆圈底色从深蓝 #0f172a 改成「___」 2. 把圆圈边框颜色从白色改成「___」（例如金色 #f59e0b） 3. 把光晕颜色从蓝色 rgba(59,130,246) 改成「___」（可配合品牌色） 4. 把圆圈内的汉堡图标（三条横线）换成你的品牌符号：可改成三角形、字母、或其他 div 组合图形 5. 把品牌名称从 "FOCUS LABS" 改成「___」（全大写字距效果最佳） 6. 把品牌名称字距从 8px 改成「___」 7. 把标语从 "See clearly." 改成「___」，或删除 8. 调整聚焦速度：frame [0, 50] 可改成 [0, 35]（更快）或 [0, 70]（更慢） 请保留从大圆缩小聚焦的核心动画逻辑，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-ring-focus
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-ring-focus

## License

MIT
