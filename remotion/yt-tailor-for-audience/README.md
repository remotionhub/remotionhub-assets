# 针对受众，量身定做 (Yt Tailor For Audience)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-tailor-for-audience). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-tailor-for-audience/68bb5cf3db6a-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-tailor-for-audience.

## Usage

Copy `src/YtTailorForAudience.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtTailorForAudience, ytTailorForAudienceDefaultProps } from './YtTailorForAudience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTailorForAudience"
      component={YtTailorForAudience}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTailorForAudienceDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene70-TailorForAudience.tsx），请帮我做以下调整： 1. 修改受众标签文字（目前是「企业客户」、「学生族群」、「消费者」） 2. 更改受众的主题颜色（目前分别使用 accent、warning、accentSecondary） 3. 调整徽章文字（目前是「针对受众，量身定做」） 4. 修改企业网站中的统计数字（目前是「99%」、「500+」、「24h」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-tailor-for-audience
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-tailor-for-audience

## License

MIT
