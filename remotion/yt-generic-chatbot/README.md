# 做出一个通用型的客服机器人 (Yt Generic Chatbot)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-generic-chatbot). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-generic-chatbot/95755798bfed-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-generic-chatbot.

## Usage

Copy `src/YtGenericChatbot.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtGenericChatbot, ytGenericChatbotDefaultProps } from './YtGenericChatbot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericChatbot"
      component={YtGenericChatbot}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericChatbotDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene219-GenericChatbot.tsx），请帮我做以下调整： 1. 修改主标题文字 2. 调整围绕机器人的行业名称（目前为电商、餐饮、教育、医疗、金融、旅游、科技） 3. 更改行业的排列角度或颜色 4. 修改英文副标题 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-generic-chatbot
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-generic-chatbot

## License

MIT
