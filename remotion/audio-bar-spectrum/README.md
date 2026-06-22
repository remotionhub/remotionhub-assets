# Audio Bar Spectrum

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/audio-bar-spectrum/0c805baf034d-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/audio-bar-spectrum.

## Usage

Copy `src/AudioBarSpectrum.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { AudioBarSpectrum, audioBarSpectrumDefaultProps } from './AudioBarSpectrum'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioBarSpectrum"
      component={AudioBarSpectrum}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioBarSpectrumDefaultProps}
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
我有一个用 Remotion 写的频谱长条视觉化组件（文件：AudioBarSpectrum.tsx），请帮我做以下调整： 1. 把长条数量从 20 根改成「___」根 2. 把最大长条高度从 420 改成「___」 3. 把标题从「频谱视觉化」改成「___」 4. 把长条颜色改成单一色系（例如全部蓝色系），色码请用「___」 请保留原本的 Math.sin 动画与倒影效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/audio-bar-spectrum
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/audio-bar-spectrum

## License

MIT
