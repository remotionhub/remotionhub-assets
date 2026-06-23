import { Composition, registerRoot } from 'remotion'
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

registerRoot(RemotionRoot)
