# Outro Sponsor

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-sponsor/17483b65ad9a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-sponsor.

## Usage

Copy `src/OutroSponsor.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroSponsor, outroSponsorDefaultProps } from './OutroSponsor'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSponsor"
      component={OutroSponsor}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSponsorDefaultProps}
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
我有一个用 Remotion 写的赞助感谢片尾组件（文件：SponsorOutro.tsx），请帮我做以下调整： 1. 把品牌名称从 `BRAND NAME` 改成「___」 2. 把品牌 Slogan 从 `Empowering creators worldwide` 改成「___」 3. 把优惠码文字从「输入优惠码 REMOTION 享 85 折优惠」改成「___」 4. 把「了解更多 →」按钮文字改成「___」 5. 把背景渐层从 `#0f172a → #0c1445` 改成「___」 6. 把优惠码文字颜色从 `#fbbf24` 改成「___」 请保留原本的淡入与缩放动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-sponsor
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-sponsor

## License

MIT
