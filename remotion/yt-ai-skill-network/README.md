# AI 技能节点网路连线动画 (Yt Ai Skill Network)

> **Attribution Note**: This component is migrated from the original template on [remotionlab.com](https://remotionlab.com/showcase/yt-ai-skill-network). Credit goes to the original creator at remotionlab.

![Preview](https://remotionhub.oss-cn-shenzhen.aliyuncs.com/showcase/yt-ai-skill-network/3d820ae75241-thumb.jpg)

Reusable Remotion component migrated from https://remotionlab.com/showcase/yt-ai-skill-network.

## Usage

Copy `src/YtAiSkillNetwork.tsx` into your Remotion project and register it in your composition root.

```tsx
import { Composition } from 'remotion'
import { YtAiSkillNetwork, ytAiSkillNetworkDefaultProps } from './YtAiSkillNetwork'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiSkillNetwork"
      component={YtAiSkillNetwork}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiSkillNetworkDefaultProps}
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
我有一个用 Remotion 写的场景组件（文件：Experiment1Scene.tsx），请帮我做以下调整： 1. 修改五个技能节点的图标路径与颜色（modules 阵列中的 path、color1、color2） 2. 调整底部标签文字（目前为「新增 Skill」） 3. 修改五个节点的飞入时间间隔（MODULE-DELAYS，目前为 50、66、82、98、114 帧） 4. 调整中心六角形的轨道半径（ORBIT-R，目前为 300px） 请保留 SVG 描边动画与光波扩散效果，只修改我指定的部分，然后把完整的修改后代码给我。
```

## Links

- RemotionHub: https://remotionhub.ai/terence/yt-ai-skill-network
- Source: https://github.com/remotionhub/remotionhub-assets/tree/main/remotion/yt-ai-skill-network

## License

MIT
