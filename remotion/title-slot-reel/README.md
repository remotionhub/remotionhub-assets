# Title Slot Reel

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/title-slot-reel/1a6c792a7713-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/title-slot-reel.

## Usage

Copy `src/TitleSlotReel.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { TitleSlotReel, titleSlotReelDefaultProps } from './TitleSlotReel'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleSlotReel"
      component={TitleSlotReel}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleSlotReelDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `text` | `string` | `REWIND` | The final resolved text. |
| `reelPrefixes` | `array` | `[["K","A","M","X"],["B","Z","T","E"],["Q","P","V","W"],["Y","N","D","I"],["J","H","S","N"],["C","L","F","G"]]` | Nested array of prefix characters for each slot column. |
| `charDelay` | `number` | `8` | Frames delay between slot reels beginning to spin. |
| `itemHeight` | `number` | `110` | Height of each character cell in pixels. |
| `fontSize` | `number` | `96` | Font size of the text. |
| `backgroundColor` | `string` | `#1a1a2e` | CSS color of the background. |
| `highlightColor` | `string` | `#fbbf24` | CSS color for the final resolved characters. |
| `baseColor` | `string` | `#374151` | CSS color for the scrolling prefix characters. |
| `stiffness` | `number` | `70` | Stiffness configuration for the spring physics animation. |
| `damping` | `number` | `25` | Damping configuration for the spring physics animation. |
| `mass` | `number` | `1.2` | Mass configuration for the spring physics animation. |

## Extra Dependencies

None.

## Agent Prompt

```text
我有一个用 Remotion 写的老虎机字卡组件（文件：SlotReelTitle.tsx），请帮我做以下调整： 1. 把最终显示文字从 "REWIND" 改成「___」（需同步更新 FINAL-TEXT 和 REEL-PREFIXES，每个位置提供 4 个过渡字元） 2. 把最终字元的颜色从金黄 #fbbf24 改成「___」 3. 把过渡字元的颜色从深灰 #374151 改成「___」 4. 把背景色从深蓝黑 #1a1a2e 改成「___」 5. 把字体大小从 96px 改成 ___px（需同步调整 ITEM-HEIGHT 为字体大小的 1.15 倍） 6. 把每个字元的出场延迟从 8 帧改成 ___ 帧（数字越大，字元依序出现的间隔越长） 请保留原本的老虎机滚轮效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/title-slot-reel
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/title-slot-reel

## License

MIT
