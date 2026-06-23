# Outro Comment Cta

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/outro-comment-cta/935e9116b671-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/outro-comment-cta.

## Usage

Copy `src/OutroCommentCta.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { OutroCommentCta, outroCommentCtaDefaultProps } from './OutroCommentCta'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroCommentCta"
      component={OutroCommentCta}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroCommentCtaDefaultProps}
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
我有一个用 Remotion 写的评论互动片尾组件（文件：CommentCtaOutro.tsx），请帮我做以下调整： 1. 把主问题文字从「你有什么想法吗？」改成「___」 2. 把副文字从「在下方评论告诉我们吧！」改成「___」 3. 把评论框提示文字从「新增评论…」改成「___」 4. 把大问号颜色从 `#3b82f6` 改成「___」 5. 把背景色从 `#0f172a` 改成「___」 6. 把假评论头像颜色（第一则）从 `#3b82f6` 改成「___」 请保留原本的弹跳、滑入与游标闪烁动画逻辑，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/outro-comment-cta
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/outro-comment-cta

## License

MIT
