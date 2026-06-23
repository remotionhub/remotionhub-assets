# 信任就是商业上最基础的货币 (Yt Trust Is Currency)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-trust-is-currency). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-trust-is-currency/2688d7fa1488-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-trust-is-currency.

## Usage

Copy `src/YtTrustIsCurrency.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTrustIsCurrency, ytTrustIsCurrencyDefaultProps } from './YtTrustIsCurrency'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustIsCurrency"
      component={YtTrustIsCurrency}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustIsCurrencyDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene189-TrustIsCurrency.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整三条信任路径的标签（目前为亲朋好友、KOL、公开平台） 3. 更改每条路径的颜色 4. 修改中心金币的动画效果 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-trust-is-currency
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-trust-is-currency

## License

MIT
