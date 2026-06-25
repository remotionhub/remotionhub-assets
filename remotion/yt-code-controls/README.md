# 代码控制画面组件的动态视觉化 (Yt Code Controls)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-code-controls). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-code-controls/fb28fb663ae7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-code-controls.

## Usage

Copy `src/YtCodeControls.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtCodeControls, ytCodeControlsDefaultProps } from './YtCodeControls'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCodeControls"
      component={YtCodeControls}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCodeControlsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：CodeControlsScene.tsx），请帮我做以下调整： 1. 修改代码视窗中的假代码行（codeLines 阵列中的 text 与 color） 2. 调整六个组件节点的标签、图标与颜色（components 阵列） 3. 修改底部说明文字（目前为「有没有其他套件，也是用代码控制画面的呢？」） 4. 调整代码视窗的位置（左边距 left 目前为 80px） 请保留连线动画与组装效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-code-controls
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-code-controls

## License

MIT
