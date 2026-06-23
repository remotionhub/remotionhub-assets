# Social Testimonial Wall

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/social-testimonial-wall/cdc264ae04b3-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/social-testimonial-wall.

## Usage

Copy `src/SocialTestimonialWall.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { SocialTestimonialWall, socialTestimonialWallDefaultProps } from './SocialTestimonialWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTestimonialWall"
      component={SocialTestimonialWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTestimonialWallDefaultProps}
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
我有一个用 Remotion 写的评价墙组件（文件：TestimonialWall.tsx），请帮我做以下调整： 1. 把第 N 张卡片的姓名从「___」改成「___」 2. 把第 N 张卡片的职称从「___」改成「___」 3. 把第 N 张卡片的评价文字改成「___」 4. 把第 N 张卡片的评分从 N 颗星改成 N 颗星 5. 把第 N 张卡片的颜色从「___」改成「___」 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/social-testimonial-wall
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/social-testimonial-wall

## License

MIT
