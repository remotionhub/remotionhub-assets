# 透过粉丝对 KOL 的信任转移到产品 (Yt Trust Transfer)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-trust-transfer). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-trust-transfer/e07d01d783ad-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-trust-transfer.

## Usage

Copy `src/YtTrustTransfer.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTrustTransfer, ytTrustTransferDefaultProps } from './YtTrustTransfer'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTrustTransfer"
      component={YtTrustTransfer}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTrustTransferDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene181-TrustTransfer.tsx），请帮我做以下调整： 1. 修改流程节点的标签（粉丝→信任→KOL→转移→产品） 2. 调整箭头连线的颜色与样式 3. 更改主标题文字 4. 修改各节点的出场延迟 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-trust-transfer
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-trust-transfer

## License

MIT
