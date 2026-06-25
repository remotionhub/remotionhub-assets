# 致命的两个错误详解 (Yt Two Errors Detail)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-two-errors-detail). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-two-errors-detail/34d665a06cf9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-two-errors-detail.

## Usage

Copy `src/YtTwoErrorsDetail.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTwoErrorsDetail, ytTwoErrorsDetailDefaultProps } from './YtTwoErrorsDetail'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTwoErrorsDetail"
      component={YtTwoErrorsDetail}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTwoErrorsDetailDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene150-TwoErrorsDetail.tsx），请帮我做以下调整： 1. 修改第一个错误的标题（目前是「痛点有问题」） 2. 调整第二个错误的标题（目前是「Distribution 不深」） 3. 更换错误编号圆圈的颜色（目前是红色 #EF4444） 4. 修改英文副标（第一个目前是 "The pain point itself is questionable"） 请保留原本的两段依序出现动画、问号 wobble 与人群出现效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-two-errors-detail
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-two-errors-detail

## License

MIT
