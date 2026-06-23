# Intro News Broadcast

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-news-broadcast/a8910f1e05e7-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-news-broadcast.

## Usage

Copy `src/IntroNewsBroadcast.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroNewsBroadcast, introNewsBroadcastDefaultProps } from './IntroNewsBroadcast'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroNewsBroadcast"
      component={IntroNewsBroadcast}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introNewsBroadcastDefaultProps}
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
我有一个用 Remotion 写的新闻播报片头组件（文件：NewsBroadcastIntro.tsx），请帮我做以下调整： 1. 把频道名称从 `NEWS CHANNEL` 改成「___」 2. 把主标题从 `Breaking News` 改成「___」 3. 把副标题从 `今日头条 ● LIVE` 改成「___」 4. 把跑马灯文字改成「___」 5. 把顶部横条与跑马灯颜色从 `#dc2626` 改成「___」 6. 把背景色从 `#0a0a0a` 改成「___」 请保留原本的滑入与跑马灯动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-news-broadcast
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-news-broadcast

## License

MIT
