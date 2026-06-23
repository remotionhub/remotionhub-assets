# 好网站 ≠ 多特效 (Yt Not Just Effects)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-not-just-effects). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-not-just-effects/c66b969dec4b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-not-just-effects.

## Usage

Copy `src/YtNotJustEffects.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtNotJustEffects, ytNotJustEffectsDefaultProps } from './YtNotJustEffects'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotJustEffects"
      component={YtNotJustEffects}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotJustEffectsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene69-NotJustEffects.tsx），请帮我做以下调整： 1. 修改混乱网站的标签文字（目前是「杂乱！眼花撩乱！」） 2. 更改清洁网站的域名文字（目前是「cleansite.com」） 3. 调整徽章文字（目前是「好网站 ≠ 多特效」） 4. 修改 Call-to-Action 按钮文字（目前是「Get Started」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-not-just-effects
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-not-just-effects

## License

MIT
