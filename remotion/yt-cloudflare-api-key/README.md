# 把 API Key 给 Claude Code (Yt Cloudflare Api Key)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-cloudflare-api-key). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-cloudflare-api-key/0ed169a434f9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-cloudflare-api-key.

## Usage

Copy `src/YtCloudflareApiKey.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCloudflareApiKey, ytCloudflareApiKeyDefaultProps } from './YtCloudflareApiKey'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCloudflareApiKey"
      component={YtCloudflareApiKey}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCloudflareApiKeyDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene212-CloudflareApiKey.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整 API Key 的显示格式（目前为 cf-sk_••••••） 3. 更改底部连接成功徽章的文字 4. 修改右侧终端机显示的指令 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-cloudflare-api-key
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-cloudflare-api-key

## License

MIT
