# Logo Icon Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-icon-reveal/242dd283a449-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-icon-reveal.

## Usage

Copy `src/LogoIconReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoIconReveal, logoIconRevealDefaultProps } from './LogoIconReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoIconReveal"
      component={LogoIconReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoIconRevealDefaultProps}
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
我有一个用 Remotion 写的图标揭示 Logo 动画组件（文件：LogoIconReveal.tsx），请帮我做以下调整： 1. 把图标渐层从蓝紫（#3b82f6→#8b5cf6）改成「___」（例如：橘红 #f97316→#ef4444） 2. 把图标内的 SVG 闪电路径改成你的品牌图标（保留 pathLength="100" 与 strokeDashoffset 动画） 3. 把品牌名称从 "Acme Studio" 改成「___」 4. 把副标语从 "Design · Build · Launch" 改成「___」 5. 调整图标大小：默认 80×80px，圆角 16px，可依比例调整 6. 调整品牌名称字型大小（默认 52px）与字重（默认 700） 7. 调整弹入速度：stiffness 默认 200，想更弹跳改大（250），想更缓慢改小（120） 请保留序列动画结构（图标弹入→路径描绘→文字滑入→副标语淡现），只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-icon-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-icon-reveal

## License

MIT
