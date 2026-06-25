# 先从服务做起，累积经验和作品 (Yt Start With Service)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-start-with-service). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-start-with-service/89c6d290d779-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-start-with-service.

## Usage

Copy `src/YtStartWithService.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtStartWithService, ytStartWithServiceDefaultProps } from './YtStartWithService'

export function RemotionRoot() {
  return (
    <Composition
      id="YtStartWithService"
      component={YtStartWithService}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytStartWithServiceDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene194-StartWithService.tsx），请帮我做以下调整： 1. 修改主标题文字（目前为「3. 先从服务做起，累积经验和作品」） 2. 调整服务流程的步骤描述 3. 更改强调颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-start-with-service
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-start-with-service

## License

MIT
