# 先做服务，再做产品 (Yt Service First)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-service-first). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-service-first/225a12b28acd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-service-first.

## Usage

Copy `src/YtServiceFirst.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtServiceFirst, ytServiceFirstDefaultProps } from './YtServiceFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtServiceFirst"
      component={YtServiceFirst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytServiceFirstDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene169-ServiceFirst.tsx），请帮我做以下调整： 1. 修改 Phase A 的三个步骤内容（目前为接听电话→累积洞察→打造机器人） 2. 调整电话接听数字（目前倒数至 100） 3. 修改 Phase B 的错误结果描述 4. 调整主标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-service-first
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-service-first

## License

MIT
