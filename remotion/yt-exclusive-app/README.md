# 直接为 KOL 粉丝做一个专属 APP (Yt Exclusive App)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-exclusive-app). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-exclusive-app/206bc5ba4de1-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-exclusive-app.

## Usage

Copy `src/YtExclusiveApp.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtExclusiveApp, ytExclusiveAppDefaultProps } from './YtExclusiveApp'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExclusiveApp"
      component={YtExclusiveApp}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExclusiveAppDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene180-ExclusiveApp.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整三个 APP 卡片的标题与描述 3. 更改强调颜色（目前为 #10B981 绿色） 4. 修改 APP 卡片的出场动画延迟 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-exclusive-app
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-exclusive-app

## License

MIT
