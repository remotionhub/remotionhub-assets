# Logo Orbit Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-orbit-reveal/b21662ec1541-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-orbit-reveal.

## Usage

Copy `src/LogoOrbitReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoOrbitReveal, logoOrbitRevealDefaultProps } from './LogoOrbitReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoOrbitReveal"
      component={LogoOrbitReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoOrbitRevealDefaultProps}
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
我有一个用 Remotion 写的轨道聚合 Logo 揭示动画组件（文件：LogoOrbitReveal.tsx），请帮我做以下调整： 1. 把中央图标渐层从靛蓝紫（#6366f1→#8b5cf6）改成你的品牌色组合 2. 把图标内的字母「V」改成你的品牌缩写（1 个大写字母，字型大小默认 60px） 3. 把三个轨道圆点的颜色从 ['#3b82f6','#8b5cf6','#ec4899'] 改成你的品牌色系 4. 把品牌名「Vertex」改成你的品牌名称（建议 1–2 个英文单字） 5. 把副标语「Motion by design.」改成你的品牌口号 6. 调整中央图标大小：默认直径 120px，可依品牌识别调整 7. 调整轨道半径：默认 100px，半径越大圆点旋转圈越宽 8. 调整旋转速度：默认 frame * 0.06 弧度，增大数值加快旋转 请保留序列动画结构（图标弹入→圆点旋转→聚合消失→品牌名登场→副标语淡现），只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-orbit-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-orbit-reveal

## License

MIT
