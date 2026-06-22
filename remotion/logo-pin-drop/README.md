# Logo Pin Drop

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-pin-drop/bc3dff54c282-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-pin-drop.

## Usage

Copy `src/LogoPinDrop.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoPinDrop, logoPinDropDefaultProps } from './LogoPinDrop'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoPinDrop"
      component={LogoPinDrop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoPinDropDefaultProps}
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
我有一个用 Remotion 写的定位针落下 Logo 动画组件（文件：LogoPinDrop.tsx），请帮我做以下调整： 1. 把针头颜色从红色 #ef4444 改成「___」（建议品牌主色） 2. 把品牌缩写从 "LC" 改成「___」（建议 1-2 个字母） 3. 把品牌名从 "LocationCo." 改成「___」 4. 把副标语从 "Find your place." 改成「___」 5. 调整针头初始大小：圆形直径默认 120px，展开后 200px，可修改 interpolate 目标值 6. 调整落下速度：frame [0, 20] 可改成 [0, 15]（更快）或 [0, 30]（更慢） 7. 调整弹跳效果：impactScaleY 的中间值 1.08 可调大（更强烈）或调小（更轻微） 请保留定位针落下 + 展开的核心动画结构，只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-pin-drop
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-pin-drop

## License

MIT
