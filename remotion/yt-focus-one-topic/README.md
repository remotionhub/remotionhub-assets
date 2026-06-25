# 深耕一个主题，不要今天做这个明天做那个 (Yt Focus One Topic)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-focus-one-topic). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-focus-one-topic/e42fc4b68e0a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-focus-one-topic.

## Usage

Copy `src/YtFocusOneTopic.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtFocusOneTopic, ytFocusOneTopicDefaultProps } from './YtFocusOneTopic'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFocusOneTopic"
      component={YtFocusOneTopic}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFocusOneTopicDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene197-FocusOneTopic.tsx），请帮我做以下调整： 1. 修改左侧散乱主题的列表 2. 调整右侧专注主题的标题 3. 更改强调颜色 4. 修改主标题文字 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-focus-one-topic
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-focus-one-topic

## License

MIT
