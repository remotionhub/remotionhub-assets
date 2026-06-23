# 我们先解决第一点 (Yt Solve First Point)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-solve-first-point). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-solve-first-point/f1bb3d75c897-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-solve-first-point.

## Usage

Copy `src/YtSolveFirstPoint.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtSolveFirstPoint, ytSolveFirstPointDefaultProps } from './YtSolveFirstPoint'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSolveFirstPoint"
      component={YtSolveFirstPoint}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSolveFirstPointDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene153-SolveFirstPoint.tsx），请帮我做以下调整： 1. 修改标题文字（目前是「我们先解决第一点」） 2. 调整数字圆圈的颜色（目前是蓝色渐层 #4DA3FF → #3B82F6） 3. 更换英文副标（目前是 "Let's solve the first issue first"） 4. 修改数字（目前是「1」） 请保留原本的数字圆圈弹入、标题滑入与底部横线伸展动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-solve-first-point
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-solve-first-point

## License

MIT
