# Logo Glow Pulse

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-glow-pulse/e36d74b99bb9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-glow-pulse.

## Usage

Copy `src/LogoGlowPulse.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoGlowPulse, logoGlowPulseDefaultProps } from './LogoGlowPulse'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoGlowPulse"
      component={LogoGlowPulse}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoGlowPulseDefaultProps}
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
我有一个用 Remotion 写的光晕脉冲 Logo 动画组件（文件：LogoGlowPulse.tsx），请帮我做以下调整： 1. 把主色渐层从 #7c3aed（电紫）→ #2563eb（电蓝）改成「___」→「___」 2. 把品牌缩写从 "GX" 改成「___」（建议 1-2 个字母） 3. 把品牌名从 "GlowX" 改成「___」 4. 把状态文字从 "ONLINE" 改成「___」（若不需要状态列可删除此区块） 5. 调整脉冲速度：默认 Math.sin(frame * 0.12)，数值越大脉冲越快 6. 调整菱形大小：主菱形默认 120×120px，光晕菱形 160×160px，可等比例修改 7. 背景改成非纯黑：可修改 background: "#050505" 为其他深色 请保留菱形 + 光晕脉冲的核心视觉结构，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-glow-pulse
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-glow-pulse

## License

MIT
