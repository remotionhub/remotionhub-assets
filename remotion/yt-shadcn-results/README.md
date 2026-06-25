# shadcn-ui Skill 网站成果展示 (Yt Shadcn Results)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-shadcn-results). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-shadcn-results/6954f9afc221-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-shadcn-results.

## Usage

Copy `src/YtShadcnResults.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtShadcnResults, ytShadcnResultsDefaultProps } from './YtShadcnResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnResults"
      component={YtShadcnResults}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnResultsDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Scene56-ShadcnResults.tsx），请帮我做以下调整： 1. 修改四种网站类型的名称（目前是 Landing Page、Dashboard、E-commerce、Blog） 2. 调整各网站缩图的主色（目前依序是 #8B5CF6、#3B82F6、#10B981、#F59E0B） 3. 更改底部评语文字（目前是「完成度高，可直接使用」） 4. 修改顶部 skill 标签的文字（目前是「shadcn-ui skill」） 请保留原本的动画效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-shadcn-results
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-shadcn-results

## License

MIT
