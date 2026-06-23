# 要在问题的圈子里 (Yt Inside The Problem)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-inside-the-problem). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-inside-the-problem/b22cf8096720-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-inside-the-problem.

## Usage

Copy `src/YtInsideTheProblem.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtInsideTheProblem, ytInsideTheProblemDefaultProps } from './YtInsideTheProblem'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInsideTheProblem"
      component={YtInsideTheProblem}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInsideTheProblemDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene217-InsideTheProblem.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整左侧「不在圈子里」的标签文字 3. 更改右侧「在圈子里」的标签文字 4. 修改底部说明文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-inside-the-problem
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-inside-the-problem

## License

MIT
