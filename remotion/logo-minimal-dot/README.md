# Logo Minimal Dot

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-minimal-dot/a82aea9cb858-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-minimal-dot.

## Usage

Copy `src/LogoMinimalDot.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoMinimalDot, logoMinimalDotDefaultProps } from './LogoMinimalDot'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoMinimalDot"
      component={LogoMinimalDot}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoMinimalDotDefaultProps}
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
我有一个用 Remotion 写的极简圆点 Logo 动画组件（文件：LogoMinimalDot.tsx），请帮我做以下调整： 1. 把品牌名从 "Dot Studio" 改成「___」 2. 把 tagline 从 "Less. Better." 改成「___」（建议简短有力） 3. 把 icon 颜色从白色 #ffffff 改成「___」（同时修改内部斜线颜色为对比色） 4. 调整圆点最终直径：默认 120px，可修改 interpolate 目标值 5. 调整品牌名字重：默认 fontWeight 300（极细），可改 400（正常）或 500（中等） 6. 替换 icon 内部图形：可把三条斜线换成其他简单几何（如十字、对勾、圆弧等） 7. 调整整体水平位置：icon 中心默认在 960-160，可修改 iconCenterX 值 请保留圆点展开的核心视觉与分层动画序列，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-minimal-dot
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-minimal-dot

## License

MIT
