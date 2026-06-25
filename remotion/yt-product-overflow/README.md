# AI 时代产品满天飞 (Yt Product Overflow)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-product-overflow). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-product-overflow/c91393047ee2-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-product-overflow.

## Usage

Copy `src/YtProductOverflow.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtProductOverflow, ytProductOverflowDefaultProps } from './YtProductOverflow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtProductOverflow"
      component={YtProductOverflow}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytProductOverflowDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene144-ProductOverflow.tsx），请帮我做以下调整： 1. 修改图标大小（目前 ICON-SIZE = 80） 2. 调整图标之间的间距（目前 GAP = 8） 3. 更换填满动画的速度（目前 delay 以距离中心为基础） 4. 调整最终缩放比例（目前最大放大至 1.15 倍） 请保留原本的波浪式 pop-in、wobble 动画与中心辉光效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-product-overflow
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-product-overflow

## License

MIT
