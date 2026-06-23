# Intro Particle Burst

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-particle-burst/c48ab520655d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-particle-burst.

## Usage

Copy `src/IntroParticleBurst.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroParticleBurst, introParticleBurstDefaultProps } from './IntroParticleBurst'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroParticleBurst"
      component={IntroParticleBurst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introParticleBurstDefaultProps}
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
我有一个用 Remotion 写的粒子爆发片头组件（文件：ParticleBurstIntro.tsx），请帮我做以下调整： 1. 把粒子数量从 40 改成「___」 2. 把粒子颜色阵列从 `["#3b82f6", "#8b5cf6", "#f59e0b"]` 改成「___」 3. 把标题文字从 `YOUR TITLE` 改成「___」 4. 把标题字型大小从 80 改成「___」 5. 把背景颜色从 `#0a0a0a` 改成「___」 6. 把粒子最大扩散距离从 `100 + (index % 5) * 80` 改成「___」 请保留原本的爆发汇聚动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-particle-burst
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-particle-burst

## License

MIT
