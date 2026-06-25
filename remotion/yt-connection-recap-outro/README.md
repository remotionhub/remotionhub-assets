# Connection 系列总结片尾 (Yt Connection Recap Outro)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-connection-recap-outro). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-connection-recap-outro/ed2a71c5b891-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-connection-recap-outro.

## Usage

Copy `src/YtConnectionRecapOutro.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtConnectionRecapOutro, ytConnectionRecapOutroDefaultProps } from './YtConnectionRecapOutro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtConnectionRecapOutro"
      component={YtConnectionRecapOutro}
      durationInFrames={480}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytConnectionRecapOutroDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene16-RecapOutro.tsx），请帮我做以下调整： 1. 修改 `recapCards` 阵列中三张卡片的 `title`、`subtitle` 与 `color`，换成你自己的成果摘要。 2. 更换 `channelPills` 阵列（目前是 ["Discord", "Slack", "Email"]）为你的社群频道名称。 3. 调整片尾频道名称（目前是 "土拨鼠日志"）。 4. 修改 GitHub 连结文字（目前是 "github.com/woodlandcreature/..."）。 请保留原本的卡片入场动画与 CTA 按钮效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-connection-recap-outro
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-connection-recap-outro

## License

MIT
