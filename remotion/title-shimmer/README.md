# Title Shimmer

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-shimmer/b3a96a120a43-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-shimmer.

## Usage

Copy `src/TitleShimmer.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleShimmer, titleShimmerDefaultProps } from './TitleShimmer'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleShimmer"
      component={TitleShimmer}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleShimmerDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `GOLDEN HOUR` | The text content to display. |
| `baseTextColor` | `string` | `#8b6914` | CSS color of the background text. |
| `shimmerColor` | `string` | `#fff8dc` | CSS color of the shining light effect. |
| `backgroundColor` | `string` | `#0c0c0c` | CSS color of the background. |
| `fontSize` | `number` | `100` | Font size of the text. |
| `startFrame` | `number` | `5` | Frame when shimmer sweep starts. |
| `endFrame` | `number` | `85` | Frame when shimmer sweep ends. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的扫光闪耀字卡组件（文件：ShimmerTitle.tsx），请帮我做以下调整： 1. 把显示文字从 "GOLDEN HOUR" 改成「___」 2. 把底层文字颜色从暗金 #8b6914 改成「___」，扫光文字颜色从亮奶油 #fff8dc 改成「___」 3. 把背景色从近黑 #0c0c0c 改成「___」 4. 把字体大小从 100px 改成 ___px 5. 把字母间距从 0.12em 改成 ___em（间距越大，扫光效果越明显） 6. 把扫光速度调整：目前从第 0 帧到第 80 帧扫过，想更快改成 0 到 50；想更慢改成 0 到 120 请保留原本的由左至右扫光效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-shimmer
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-shimmer

## License

MIT
