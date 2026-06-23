# Social Comment Wall

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-comment-wall/c9bcf9bb26a6-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-comment-wall.

## Usage

Copy `src/SocialCommentWall.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialCommentWall, socialCommentWallDefaultProps } from './SocialCommentWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialCommentWall"
      component={SocialCommentWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialCommentWallDefaultProps}
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
我有一个用 Remotion 写的直播评论板组件（文件：CommentWall.tsx），请帮我做以下调整： 1. 把 COMMENTS 数组中的用户名和评论文字改成「___」 2. 把每条评论的出现间隔从 15 帧改成「___」帧 3. 把评论容器宽度从 800px 改成「___」px 4. 把最多可见评论数从 6 则改成「___」则 5. 把评论卡片背景透明度从 0.04 改成「___」 6. 把背景颜色从 #0f0f0f 改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-comment-wall
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-comment-wall

## License

MIT
