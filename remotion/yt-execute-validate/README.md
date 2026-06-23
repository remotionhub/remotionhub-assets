# 怎么运行与验证点子 (Yt Execute Validate)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-execute-validate). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-execute-validate/96cc910cfb34-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-execute-validate.

## Usage

Copy `src/YtExecuteValidate.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtExecuteValidate, ytExecuteValidateDefaultProps } from './YtExecuteValidate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExecuteValidate"
      component={YtExecuteValidate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExecuteValidateDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene158-ExecuteValidate.tsx），请帮我做以下调整： 1. 修改主标题（目前是「重点在：怎么运行与验证点子」） 2. 调整左侧方块标签（目前是「运行」，英文 Execute） 3. 更换右侧方块标签（目前是「验证」，英文 Validate） 4. 修改两个方块的颜色（运行目前是 #10B981 绿，验证是 #4DA3FF 蓝） 请保留原本的方块弹入、虚线箭头与底部循环箭头动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-execute-validate
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-execute-validate

## License

MIT
