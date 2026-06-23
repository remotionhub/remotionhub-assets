# 通用 = 什么都缺了一点 (Yt Generic Means Lacking)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-generic-means-lacking). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-generic-means-lacking/e7c12309c21e-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-generic-means-lacking.

## Usage

Copy `src/YtGenericMeansLacking.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtGenericMeansLacking, ytGenericMeansLackingDefaultProps } from './YtGenericMeansLacking'

export function RemotionRoot() {
  return (
    <Composition
      id="YtGenericMeansLacking"
      component={YtGenericMeansLacking}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytGenericMeansLackingDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene220-GenericMeansLacking.tsx），请帮我做以下调整： 1. 修改雷达图的六个维度名称（目前为速度、精准度、深度、客制化、体验、信任） 2. 调整各维度的填充比例 3. 更改主标题文字 4. 修改缺口指示器的颜色 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-generic-means-lacking
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-generic-means-lacking

## License

MIT
