# 品牌装饰剥除：价值还剩什么？ (Yt Brand Value Stripped)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-brand-value-stripped). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-brand-value-stripped/8b31e36b940b-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-brand-value-stripped.

## Usage

Copy `src/YtBrandValueStripped.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtBrandValueStripped, ytBrandValueStrippedDefaultProps } from './YtBrandValueStripped'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBrandValueStripped"
      component={YtBrandValueStripped}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBrandValueStrippedDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene78-BrandValueLeft.tsx），请帮我做以下调整： 1. 调整装饰元素的剥除速度（目前各元素间隔约 4-8 帧） 2. 修改品牌卡片上的字母（目前是「B」） 3. 更换最终问号底部的说明文字（目前是「价值还剩什么？」） 4. 调整动画总长度（目前是 7 秒 = 210 帧） 请保留原本的装饰卡片弹入、逐步剥除动画与问号弹跳效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-brand-value-stripped
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-brand-value-stripped

## License

MIT
