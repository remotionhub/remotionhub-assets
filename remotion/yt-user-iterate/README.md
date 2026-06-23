# 透过使用者互动不断优化调整 (Yt User Iterate)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-user-iterate). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-user-iterate/12681663fa41-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-user-iterate.

## Usage

Copy `src/YtUserIterate.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtUserIterate, ytUserIterateDefaultProps } from './YtUserIterate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtUserIterate"
      component={YtUserIterate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytUserIterateDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene171-UserIterate.tsx），请帮我做以下调整： 1. 修改标题文字（目前为「透过使用者互动，不断优化调整」） 2. 调整使用者端与产品端的颜色 3. 修改中间「不断优化」的标签文字 4. 调整回圈动画的脉冲速度 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-user-iterate
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-user-iterate

## License

MIT
