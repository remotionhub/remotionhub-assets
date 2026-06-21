# Lower Third News

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/lower-third-news/819a0e448ec6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/lower-third-news.

## Usage

Copy `src/LowerThirdNews.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { LowerThirdNews, lowerThirdNewsDefaultProps } from './LowerThirdNews'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdNews"
      component={LowerThirdNews}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdNewsDefaultProps}
    />
  )
}
```

## Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `name` | `string` | `张伟明` | Primary display name. |
| `title` | `string` | `现场记者` | Secondary title or role. |
| `segmentLabel` | `string` | `LIVE` | Text displayed inside the live indicator tag. |
| `accentColor` | `string` | `#ef4444` | CSS color for the live indicator tag background. |
| `titleColor` | `string` | `#bfdbfe` | CSS color for the title text. |
| `cardBackgroundColor` | `string` | `#1d4ed8` | CSS color for the banner background block. |
| `animationStiffness` | `number` | `100` | Stiffness configuration. |

## Extra Dependencies

None.

## Agent Prompt

```text
Customize the LowerThirdNews Remotion component by setting the name, title, segmentLabel, accentColor, titleColor, cardBackgroundColor, and animationStiffness while preserving the news live banner and rolling ticker animation.
```

## Links

- RemotionHub: https://remotionhub.ai/terence/lower-third-news
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/lower-third-news

## License

MIT
