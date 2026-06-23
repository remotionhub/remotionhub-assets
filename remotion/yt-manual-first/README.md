# 不要担心手动，先解决问题赚到钱再自动化 (Yt Manual First)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-manual-first). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-manual-first/8246125822dc-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-manual-first.

## Usage

Copy `src/YtManualFirst.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtManualFirst, ytManualFirstDefaultProps } from './YtManualFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtManualFirst"
      component={YtManualFirst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytManualFirstDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene170-ManualFirst.tsx），请帮我做以下调整： 1. 修改三个阶段的标题（手动→赚钱→自动化） 2. 调整主标题文字 3. 更改各阶段的代表颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-manual-first
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-manual-first

## License

MIT
