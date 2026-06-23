# Transition Split Doors

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/transition-split-doors/ecb0bc36ccdd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/transition-split-doors.

## Usage

Copy `src/TransitionSplitDoors.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TransitionSplitDoors, transitionSplitDoorsDefaultProps } from './TransitionSplitDoors'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSplitDoors"
      component={TransitionSplitDoors}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSplitDoorsDefaultProps}
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
我有一个用 Remotion 写的对开门转场组件（文件：SplitDoorsTransition.tsx），请帮我做以下调整： 1. 把动画起始延迟从 20 改成「___」（`frame - 20` 中的延迟量） 2. 把 spring 的 damping 从 18 改成「___」 3. 把 spring 的 stiffness 从 100 改成「___」 4. 把分割点从画面正中央（960px）改成「___」px（例如 640 代表左侧偏移分割） 5. 把左门的移动距离从 -960 改成「___」px 6. 把右门的移动距离从 960 改成「___」px 请保留原本的对开门逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/transition-split-doors
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/transition-split-doors

## License

MIT
