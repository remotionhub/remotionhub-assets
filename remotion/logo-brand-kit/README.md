# Logo Brand Kit

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-brand-kit/07d83e7a97ad-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-brand-kit.

## Usage

Copy `src/LogoBrandKit.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoBrandKit, logoBrandKitDefaultProps } from './LogoBrandKit'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoBrandKit"
      component={LogoBrandKit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoBrandKitDefaultProps}
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
我有一个用 Remotion 写的品牌识别全套展示动画组件（文件：LogoBrandKit.tsx），请帮我做以下调整： 1. 把图标底色从靛蓝（#6366f1）改成你的主品牌色 2. 把图标内的字母「B」改成你的品牌缩写（1 个大写字母，字型大小默认 72px） 3. 把品牌全名「BrandKit」改成你的品牌名称 4. 把类别标签「Design System」改成你的品牌类别或部门名称（letterSpacing 4px 适合全大写英文） 5. 把色票颜色数组 ['#6366f1','#8b5cf6','#a78bfa','#c4b5fd'] 改成你的品牌色系（4 个颜色，建议由深到浅） 6. 把标语「Build with confidence.」改成你的品牌口号（斜体，默认 22px） 7. 调整整体内容宽度：默认 860px，可视品牌名长短调整 8. 调整图标大小：默认 120×120px，圆角 20px，可依品牌风格调整 请保留序列动画结构（图标弹入→品牌名滑入→标签淡入→分隔线展开→色票逐一弹出→标语淡现），只修改我指定的部分，然后把完整修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-brand-kit
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-brand-kit

## License

MIT
