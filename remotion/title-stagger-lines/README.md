# Title Stagger Lines

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-stagger-lines/2c3acb67fed2-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-stagger-lines.

## Usage

Copy `src/TitleStaggerLines.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleStaggerLines, titleStaggerLinesDefaultProps } from './TitleStaggerLines'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleStaggerLines"
      component={TitleStaggerLines}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleStaggerLinesDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `lines` | `array` | `[{"text":"Design","delay":0,"from":"left","color":"#ffffff","size":120},{"text":"with Purpose.","delay":20,"from":"right","color":"#94a3b8","size":72},{"text":"Move the World.","delay":40,"from":"bottom","color":"#38bdf8","size":58}]` | Staggered text lines config with text, delay, animation direction, color, and size. |
| `backgroundColor` | `string` | `#0f172a` | CSS color of the background. |
| `paddingLeft` | `number` | `120` | Left padding for text alignment in pixels. |
| `stiffness` | `number` | `100` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `18` | Damping configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的逐行交错字卡组件（文件：StaggerLinesTitle.tsx），请帮我做以下调整： 1. 把三行文字从 "Design" / "with Purpose." / "Move the World." 改成「___」/「___」/「___」 2. 把三行文字的颜色从白/灰/蓝（#ffffff / #94a3b8 / #38bdf8）改成「___」/「___」/「___」 3. 把三行文字的字体大小从 120px / 72px / 58px 改成 ___px / ___px / ___px 4. 把每行的出场方向从 left / right / bottom 改成「___」/「___」/「___」（可选：left、right、bottom） 5. 把背景色从深蓝 #0f172a 改成「___」 6. 把每行的出场延迟从 0 / 20 / 40 帧改成 ___ / ___ / ___ 帧 请保留原本的三行依序滑入效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-stagger-lines
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-stagger-lines

## License

MIT
