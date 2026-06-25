# 不要一口气做平台，先从小工具开始 (Yt Start Small)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-start-small). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-start-small/6bcee35d0908-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-start-small.

## Usage

Copy `src/YtStartSmall.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtStartSmall, ytStartSmallDefaultProps } from './YtStartSmall'

export function RemotionRoot() {
  return (
    <Composition
      id="YtStartSmall"
      component={YtStartSmall}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytStartSmallDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene198-StartSmall.tsx），请帮我做以下调整： 1. 修改右侧小起点的项目（目前为趋势报告、小工具） 2. 调整左侧「大平台」的描述文字 3. 更改强调颜色 4. 修改主标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-start-small
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-start-small

## License

MIT
