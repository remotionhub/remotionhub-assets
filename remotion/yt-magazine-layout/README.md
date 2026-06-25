# 杂志／书本式网站排版 (Yt Magazine Layout)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-magazine-layout). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-magazine-layout/f2ce4dd610d9-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-magazine-layout.

## Usage

Copy `src/YtMagazineLayout.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtMagazineLayout, ytMagazineLayoutDefaultProps } from './YtMagazineLayout'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMagazineLayout"
      component={YtMagazineLayout}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMagazineLayoutDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene77-MagazineStyle.tsx），请帮我做以下调整： 1. 修改杂志页面的主色调（目前是暖黄 #FFB547） 2. 调整左页的大标题文字（目前是「设计的艺术」） 3. 修改右页的引用语（目前是「像翻书一样的浏览体验」） 4. 更换最后显示的标签文字（目前是「阅读式体验」） 请保留原本的浏览器框架、书脊折痕效果与内容逐步淡入动画，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-magazine-layout
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-magazine-layout

## License

MIT
