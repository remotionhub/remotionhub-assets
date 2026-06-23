# 针对这样一个简单的 AI 产品 (Yt Simple Ai Product)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-simple-ai-product). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-simple-ai-product/cefe9b407e49-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-simple-ai-product.

## Usage

Copy `src/YtSimpleAiProduct.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtSimpleAiProduct, ytSimpleAiProductDefaultProps } from './YtSimpleAiProduct'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSimpleAiProduct"
      component={YtSimpleAiProduct}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSimpleAiProductDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene203-SimpleAIProduct.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整产品卡片的图标与名称 3. 更改「简单」徽章的文字与颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-simple-ai-product
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-simple-ai-product

## License

MIT
