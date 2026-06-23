# 来回调整与测试 (Yt Iterate Two Days)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-iterate-two-days). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-iterate-two-days/3075af1d6bf6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-iterate-two-days.

## Usage

Copy `src/YtIterateTwoDays.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtIterateTwoDays, ytIterateTwoDaysDefaultProps } from './YtIterateTwoDays'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIterateTwoDays"
      component={YtIterateTwoDays}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIterateTwoDaysDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene213-IterateTwoDays.tsx），请帮我做以下调整： 1. 修改四个步骤的名称（目前为：开发、测试、修正、部署） 2. 调整各步骤的颜色 3. 更改主标题文字 4. 修改底部徽章的完成时间文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-iterate-two-days
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-iterate-two-days

## License

MIT
