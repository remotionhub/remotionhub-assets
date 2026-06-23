# Social Yt Video

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-yt-video/f4162fbb2cf0-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-yt-video.

## Usage

Copy `src/SocialYtVideo.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialYtVideo, socialYtVideoDefaultProps } from './SocialYtVideo'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialYtVideo"
      component={SocialYtVideo}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialYtVideoDefaultProps}
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
我有一个用 Remotion 写的 YouTube 视频推荐卡组件（文件：YtVideoCard.tsx），请帮我做以下调整： 1. 把视频标题改成「___」（修改顶部 VIDEO-TITLE 常数，用 \n 换行） 2. 把频道名称从 "Remotion 中文频道" 改成「___」（修改 CHANNEL-NAME 常数） 3. 把观看次数上限从 12000 改成「___」（修改 VIEWS-TARGET 常数） 4. 把视频时长标签从 "10:42" 改成「___」（修改 DURATION-LABEL 常数） 5. 把缩图渐层颜色改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-yt-video
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-yt-video

## License

MIT
