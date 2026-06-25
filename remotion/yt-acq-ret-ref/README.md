# Acquisition / Retention / Referral (Yt Acq Ret Ref)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-acq-ret-ref). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-acq-ret-ref/2946cc9b4177-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-acq-ret-ref.

## Usage

Copy `src/YtAcqRetRef.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAcqRetRef, ytAcqRetRefDefaultProps } from './YtAcqRetRef'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAcqRetRef"
      component={YtAcqRetRef}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAcqRetRefDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene141-AcqRetRef.tsx），请帮我做以下调整： 1. 修改三张卡片的标题（目前是 Acquisition / Retention / Referral） 2. 调整各卡片的副标题（目前是「怎么让人知道」、「怎么让客人回来」、「怎么让客人拉客人」） 3. 更换卡片颜色（目前是蓝 #4DA3FF / 绿 #10B981 / 橘 #F59E0B） 4. 修改各卡片的策略项目（目前 Acq 有 4 项，Ret 有 3 项，Ref 有 3 项） 请保留原本的卡片弹入、顶部色条与图标逐步出现动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-acq-ret-ref
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-acq-ret-ref

## License

MIT
