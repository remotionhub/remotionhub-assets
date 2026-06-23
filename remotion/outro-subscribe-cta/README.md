# Outro Subscribe Cta

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-subscribe-cta/5e439a71a36b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-subscribe-cta.

## Usage

Copy `src/OutroSubscribeCta.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroSubscribeCta, outroSubscribeCtaDefaultProps } from './OutroSubscribeCta'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSubscribeCta"
      component={OutroSubscribeCta}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSubscribeCtaDefaultProps}
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
我有一个用 Remotion 写的订阅 CTA 片尾组件（文件：SubscribeCtaOutro.tsx），请帮我做以下调整： 1. 把频道名称从 `我的频道名称` 改成「___」 2. 把订阅按钮文字从 `订阅` 改成「___」 3. 把订阅按钮颜色从 `#ff0000` 改成「___」 4. 把提示文字从 `记得打开通知，不错过任何新视频！` 改成「___」 5. 把频道名称字型大小从 72 改成「___」 6. 把背景颜色从 `#0f0f0f` 改成「___」 请保留原本的弹簧动画与铃铛摇摆逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-subscribe-cta
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-subscribe-cta

## License

MIT
