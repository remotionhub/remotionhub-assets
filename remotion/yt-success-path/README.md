# 成功路径：服务→自动化→产品化 (Yt Success Path)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-success-path). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-success-path/dae924f480fe-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-success-path.

## Usage

Copy `src/YtSuccessPath.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtSuccessPath, ytSuccessPathDefaultProps } from './YtSuccessPath'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSuccessPath"
      component={YtSuccessPath}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSuccessPathDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene168-SuccessPath.tsx），请帮我做以下调整： 1. 修改三个步骤的标签文字（目前为「先做服务」「创建自动化」「产品化」） 2. 调整每个步骤的颜色（目前为蓝、琥珀、绿） 3. 修改标题文字 4. 调整步骤出现的时间间隔 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-success-path
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-success-path

## License

MIT
