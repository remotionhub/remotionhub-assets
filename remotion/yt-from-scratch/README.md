# 空白文件到完整代码的转换动画 (Yt From Scratch)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-from-scratch). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-from-scratch/19759c2f8634-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-from-scratch.

## Usage

Copy `src/YtFromScratch.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFromScratch, ytFromScratchDefaultProps } from './YtFromScratch'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFromScratch"
      component={YtFromScratch}
      durationInFrames={270}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFromScratchDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：FromScratchScene.tsx），请帮我做以下调整： 1. 修改「完整代码」SVG 图标中的假代码文字行（codeTextLines 阵列） 2. 调整三个元素出现的时间点（EMPTY-START、ARROW-START、COMPLETE-START） 3. 修改箭头的颜色渐层（目前从 #4DA3FF 到 #A78BFA 到 #34D399） 4. 调整背景粒子的数量（目前为 14 个） 请保留 SVG 描边动画与能量流粒子效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-from-scratch
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-from-scratch

## License

MIT
