# 那些被投资人拒绝的点子 (Yt Rejected Ideas)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-rejected-ideas). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-rejected-ideas/724c1dfc772e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-rejected-ideas.

## Usage

Copy `src/YtRejectedIdeas.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtRejectedIdeas, ytRejectedIdeasDefaultProps } from './YtRejectedIdeas'

export function RemotionRoot() {
  return (
    <Composition
      id="YtRejectedIdeas"
      component={YtRejectedIdeas}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytRejectedIdeasDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene155-RejectedIdeas.tsx），请帮我做以下调整： 1. 新增或更换公司（目前是 Airbnb、Uber、Instagram、Slack 四家） 2. 修改每家公司的拒绝语录（目前各有中英文版本） 3. 调整市值数字（目前 Airbnb $80B+、Uber $150B+、Instagram $1B→收购、Slack $27.7B→收购） 4. 更换每家公司的主色（目前 Airbnb 红、Uber 黑、Instagram 粉、Slack 紫） 请保留原本的公司名称弹入、拒绝语出现加删除线、市值反转显示动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-rejected-ideas
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-rejected-ideas

## License

MIT
