# 部署到 Cloudflare (Yt Deploy Cloudflare)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-deploy-cloudflare). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-deploy-cloudflare/68d290450a73-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-deploy-cloudflare.

## Usage

Copy `src/YtDeployCloudflare.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtDeployCloudflare, ytDeployCloudflareDefaultProps } from './YtDeployCloudflare'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDeployCloudflare"
      component={YtDeployCloudflare}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDeployCloudflareDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene211-DeployCloudflare.tsx），请帮我做以下调整： 1. 修改左侧前端/后端卡片的描述文字 2. 调整右侧 Cloudflare 部署项目（目前为 Pages、Workers、D1 Database） 3. 更改主标题文字 4. 修改底部成功徽章的文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-deploy-cloudflare
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-deploy-cloudflare

## License

MIT
