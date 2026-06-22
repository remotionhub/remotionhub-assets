# Logo Emblem

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-emblem/9c0176958a79-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-emblem.

## Usage

Copy `src/LogoEmblem.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoEmblem, logoEmblemDefaultProps } from './LogoEmblem'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoEmblem"
      component={LogoEmblem}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoEmblemDefaultProps}
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
我有一个用 Remotion 写的古典奖章 Logo 动画组件（文件：LogoEmblem.tsx），请帮我做以下调整： 1. 把金色系主色从 #d97706 改成「___」（建议金色、银色或铜色系） 2. 把品牌缩写从 "PR" 改成「___」（建议 1-3 个字母） 3. 把底部丝带文字从 "PREMIUM" 改成「___」（全大写） 4. 把顶部标语从 "AWARD OF EXCELLENCE" 改成「___」 5. 调整外圆直径：默认 r=155，可依需求修改（同步修改 outerCircumference 计算） 6. 调整动画速度：外圆描绘 frame [0, 35] 可改更快或更慢 7. 若不需要装饰圆点，可删除 dotPositions 及对应 SVG circle 元素 请保留圆形奖章的视觉结构与分层动画序列，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-emblem
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-emblem

## License

MIT
