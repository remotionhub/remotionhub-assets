# Outro End Screen

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-end-screen/4288c5153baf-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-end-screen.

## Usage

Copy `src/OutroEndScreen.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroEndScreen, outroEndScreenDefaultProps } from './OutroEndScreen'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroEndScreen"
      component={OutroEndScreen}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroEndScreenDefaultProps}
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
我有一个用 Remotion 写的视频推荐结尾卡组件（文件：EndScreenOutro.tsx），请帮我做以下调整： 1. 把顶部标题从「继续观看」改成「___」 2. 把订阅按钮文字从「订阅频道」改成「___」 3. 把频道头像背景色从 `#ff0000` 改成「___」 4. 把订阅按钮背景色从 `#ff0000` 改成「___」 5. 把整体背景色从 `#0f0f0f` 改成「___」 6. 把视频占位框边框色从 `#404040` 改成「___」 请保留原本的滑入与弹跳动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-end-screen
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-end-screen

## License

MIT
