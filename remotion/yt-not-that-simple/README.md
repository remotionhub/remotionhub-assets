# 做产品真的不容易，不是做出来发出去这么简单 (Yt Not That Simple)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-not-that-simple). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-not-that-simple/1685e39cd4a7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-not-that-simple.

## Usage

Copy `src/YtNotThatSimple.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNotThatSimple, ytNotThatSimpleDefaultProps } from './YtNotThatSimple'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotThatSimple"
      component={YtNotThatSimple}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotThatSimpleDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene199-NotThatSimple.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整冰山下方的隐藏复杂度项目 3. 更改冰山的颜色渐层 4. 修改左侧「天真想法」的描述 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-not-that-simple
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-not-that-simple

## License

MIT
