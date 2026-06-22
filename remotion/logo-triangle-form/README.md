# Logo Triangle Form

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/logo-triangle-form/fa13ecd063cd-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/logo-triangle-form.

## Usage

Copy `src/LogoTriangleForm.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LogoTriangleForm, logoTriangleFormDefaultProps } from './LogoTriangleForm'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoTriangleForm"
      component={LogoTriangleForm}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoTriangleFormDefaultProps}
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
我有一个用 Remotion 写的三角碎片拼合 Logo 动画组件（文件：LogoTriangleForm.tsx），请帮我做以下调整： 1. 修改品牌名：把「Triform」改成你的品牌名（建议 1–2 个英文单字） 2. 修改副标语：把「Built to last.」改成你的品牌标语 3. 调整配色（三个小三角形）： - 左下三角默认蓝色 #3b82f6，可改为品牌主色 - 右下三角默认紫色 #8b5cf6，可改为品牌副色 - 顶部三角默认青色 #06b6d4，可改为品牌第三色 - 中央倒三角（负空间）背景色 #0f0f0f 需与画面背景相同 4. 调整三角形大小： - 目前大三角高 220px，中心约 (960, 430) - 顶点：顶部 (960,320)、左下 (833,540)、右下 (1087,540) - 各小三角的顶点坐标需同步修改，请依比例缩放 5. 调整 spring 物理参数： - damping 默认 18（越低越弹跳），stiffness 默认 120（越高越快） - stagger 间隔默认 12 帧，可缩到 8 帧（更紧凑）或拉到 16 帧（更连贯） 6. 调整各三角形飞入起始位置： - 左下：默认 (-300, 200)，可改成更远如 (-500, 300) - 右下：默认 (300, 200) - 顶部：默认 (0, -300)，可改为 (0, -500) 7. 调整品牌名与副标语出现时机： - 品牌名 frame 80-105，副标语 frame 100-120 请保留三角飞入→中央负空间→品牌名→副标语的序列结构，只修改我指定的部分，并返回完整修改后代码。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/logo-triangle-form
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/logo-triangle-form

## License

MIT
