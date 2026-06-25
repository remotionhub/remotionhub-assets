# 报告从评分改成建议怎么开始做 (Yt Report Transform)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-report-transform). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-report-transform/05201623b930-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-report-transform.

## Usage

Copy `src/YtReportTransform.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtReportTransform, ytReportTransformDefaultProps } from './YtReportTransform'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReportTransform"
      component={YtReportTransform}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReportTransformDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene159-ReportTransform.tsx），请帮我做以下调整： 1. 修改标题文字为其他 BEFORE/AFTER 对比情境（例如：「从『问题清单』改成『行动计划』」） 2. 调整 BEFORE 标签颜色（目前为 #EF4444 红色） 3. 调整 AFTER 标签颜色（目前为 #10B981 绿色） 4. 修改箭头颜色与样式 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-report-transform
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-report-transform

## License

MIT
