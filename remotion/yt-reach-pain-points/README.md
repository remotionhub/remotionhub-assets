# 持续触及痛点用户 (Yt Reach Pain Points)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-reach-pain-points). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-reach-pain-points/215efa904ea0-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-reach-pain-points.

## Usage

Copy `src/YtReachPainPoints.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtReachPainPoints, ytReachPainPointsDefaultProps } from './YtReachPainPoints'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReachPainPoints"
      component={YtReachPainPoints}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReachPainPointsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene140-ReachPainPoints.tsx），请帮我做以下调整： 1. 修改人群数量（目前是 10 个人） 2. 调整有痛点的人的比例（目前 5/10 有痛点） 3. 更换雷达脉冲的颜色（目前是 #4DA3FF 蓝色） 4. 调整动画总长度（目前是 6 秒 = 180 帧） 请保留原本的天线动画、脉冲扩散、人物弹出与连线动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-reach-pain-points
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-reach-pain-points

## License

MIT
