# Intro Geometric

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/intro-geometric/ac493da5078a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/intro-geometric.

## Usage

Copy `src/IntroGeometric.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { IntroGeometric, introGeometricDefaultProps } from './IntroGeometric'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroGeometric"
      component={IntroGeometric}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introGeometricDefaultProps}
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
我有一个用 Remotion 写的几何图形片头组件（文件：GeometricIntro.tsx），请帮我做以下调整： 1. 把主标题从 `Geometric Title` 改成「___」 2. 把副标题从 `Creative Subtitle` 改成「___」 3. 把主标题字型大小从 80 改成「___」 4. 把图形 1（方块）颜色从 `#3b82f6` 改成「___」 5. 把图形 2（菱形）颜色从 `#8b5cf6` 改成「___」 6. 把背景色从 `#0f172a` 改成「___」 请保留原本的弹性飞入动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/intro-geometric
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/intro-geometric

## License

MIT
