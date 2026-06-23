# 反复修正直到完美 (Yt Bug Fix Loop)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-bug-fix-loop). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-bug-fix-loop/56864ebf3acb-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-bug-fix-loop.

## Usage

Copy `src/YtBugFixLoop.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtBugFixLoop, ytBugFixLoopDefaultProps } from './YtBugFixLoop'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBugFixLoop"
      component={YtBugFixLoop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBugFixLoopDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene209-BugFixLoop.tsx），请帮我做以下调整： 1. 修改四个问题的描述（目前为：有 Bug、太丑、缺字、寄信失败） 2. 调整对应的解决方案文字 3. 更改主标题文字 4. 修改问题/解决方案的颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-bug-fix-loop
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-bug-fix-loop

## License

MIT
