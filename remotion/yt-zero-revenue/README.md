# 10 人注册 0 人付费 (Yt Zero Revenue)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-zero-revenue). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-zero-revenue/2f0721a06f2d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-zero-revenue.

## Usage

Copy `src/YtZeroRevenue.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtZeroRevenue, ytZeroRevenueDefaultProps } from './YtZeroRevenue'

export function RemotionRoot() {
  return (
    <Composition
      id="YtZeroRevenue"
      component={YtZeroRevenue}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytZeroRevenueDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene127-ZeroRevenue.tsx），请帮我做以下调整： 1. 修改「10 人注册」的数字（目前是 10） 2. 调整「0 人付费」的文字（目前是 0） 3. 更换线图颜色（目前开始是 #00D4AA 绿色，崩盘后转为 #FF6B6B 红色） 4. 调整动画总长度（目前是 5 秒 = 150 帧） 请保留原本的折线绘制动画、崩盘过场与红色 flatline，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-zero-revenue
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-zero-revenue

## License

MIT
