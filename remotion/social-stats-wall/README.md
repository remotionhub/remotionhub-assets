# Social Stats Wall

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-stats-wall/1947153b25d3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-stats-wall.

## Usage

Copy `src/SocialStatsWall.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialStatsWall, socialStatsWallDefaultProps } from './SocialStatsWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialStatsWall"
      component={SocialStatsWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialStatsWallDefaultProps}
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
我有一个用 Remotion 写的社群数据墙组件（文件：SocialStatsWall.tsx），请帮我做以下调整： 1. 把第 N 张卡片的平台名称从「___」改成「___」 2. 把第 N 张卡片的主要数字从「___」改成「___」 3. 把第 N 张卡片的主要标签从「___」改成「___」 4. 把第 N 张卡片的次要指标改成「___」 5. 把第 N 张卡片的主题色从「___」改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-stats-wall
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-stats-wall

## License

MIT
