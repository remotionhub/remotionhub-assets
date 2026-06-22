# Logo Stamp Reveal

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-stamp-reveal/5574f94ec865-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-stamp-reveal.

## Usage

Copy `src/LogoStampReveal.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoStampReveal, logoStampRevealDefaultProps } from './LogoStampReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoStampReveal"
      component={LogoStampReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoStampRevealDefaultProps}
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
我有一个用 Remotion 写的品牌印章盖下动画组件（文件：LogoStampReveal.tsx），请帮我做以下调整： 1. 把印章底色从红色（#dc2626）改成你的品牌色（例如：深蓝 #1e40af） 2. 把品牌缩写从「BR」改成你的缩写（1–3 个字母），并调整字型大小（默认 100px） 3. 把弧形文字「BRAND STUDIO」改成你的品牌口号或全名（建议 2–4 个英文单字） 4. 把「SINCE 2024」改成你的成立年份或自订文字 5. 把品牌全名「Brand Studio Inc.」改成你的正式名称 6. 把副标语「Identity · Strategy · Craft」改成你的服务描述 7. 调整印章尺寸：默认 260×260px，圆角 12px，可依品牌风格调整 8. 若想改为方形印章风格，可把圆角改成 0px；若想要圆形印章，改成 50% 请保留序列动画结构（落下冲击→光晕→缩写→弧形文字→年份→全名副标语），只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-stamp-reveal
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-stamp-reveal

## License

MIT
