# Distribution 怎么解决？真正困难的地方 (Yt Distribution Hard)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-distribution-hard). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-distribution-hard/e3c8712e7eb6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-distribution-hard.

## Usage

Copy `src/YtDistributionHard.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtDistributionHard, ytDistributionHardDefaultProps } from './YtDistributionHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionHard"
      component={YtDistributionHard}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionHardDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene172-DistributionHard.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整「真正困难」徽章的颜色与文字 3. 更改连结痛点来源的描述文字 4. 调整动画出现的时间点 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-distribution-hard
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-distribution-hard

## License

MIT
