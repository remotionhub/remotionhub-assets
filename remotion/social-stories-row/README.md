# Social Stories Row

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-stories-row/0c08ebb9c082-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-stories-row.

## Usage

Copy `src/SocialStoriesRow.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialStoriesRow, socialStoriesRowDefaultProps } from './SocialStoriesRow'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialStoriesRow"
      component={SocialStoriesRow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialStoriesRowDefaultProps}
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
我有一个用 Remotion 写的限时动态列组件（文件：StoriesRow.tsx），请帮我做以下调整： 1. 把 STORIES 阵列中的使用者名称改成「___」 2. 把彩虹未读环颜色从 #f09433 → #bc1888 改成「___」 3. 把头像大小从 96px 改成「___」 4. 把每个圆圈的弹入间隔从每 8 帧改成「___」帧 5. 把直播通知出现时间从第 80 帧改成第「___」帧 6. 把背景颜色从 #0f0f0f 改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-stories-row
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-stories-row

## License

MIT
