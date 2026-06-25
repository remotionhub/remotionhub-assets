# 做产品之前先累积信任感 (Yt Build Trust First)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-build-trust-first). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-build-trust-first/549a2db22e2f-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-build-trust-first.

## Usage

Copy `src/YtBuildTrustFirst.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtBuildTrustFirst, ytBuildTrustFirstDefaultProps } from './YtBuildTrustFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildTrustFirst"
      component={YtBuildTrustFirst}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildTrustFirstDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene190-BuildTrustFirst.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整左侧「错误做法」的描述 3. 修改右侧信任积木的标签 4. 更改强调颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-build-trust-first
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-build-trust-first

## License

MIT
