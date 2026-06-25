# SVG 渐层边框卡片：视频学习成果展示 (Yt Svg Cards)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-svg-cards). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-svg-cards/a1b83dfbc4c6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-svg-cards.

## Usage

Copy `src/YtSvgCards.tsx` into your Remotion project and register it in your composition root. Also copy `src/runtime-assets.ts` which provides the runtime asset URLs required by this component.

```tsx
import { Composition } from 'remotion'
import { YtSvgCards, ytSvgCardsDefaultProps } from './YtSvgCards'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSvgCards"
      component={YtSvgCards}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSvgCardsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：SvgCardsScene.tsx），请帮我做以下调整： 1. 修改两张卡片的文字内容（cardData 阵列中的 text 栏位） 2. 调整两张卡片的渐层颜色（每张卡片的 colors.c1、colors.c2） 3. 修改顶部标题的数字（目前为「2 个答案」） 4. 调整卡片尺寸（目前为 640×280） 请保留 SVG 描边动画与光晕脉动效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-svg-cards
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-svg-cards

## License

MIT
