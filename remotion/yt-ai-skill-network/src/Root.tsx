import { Composition, registerRoot } from 'remotion'
import { YtAiSkillNetwork, ytAiSkillNetworkDefaultProps , EXPERIMENT1_DURATION_FRAMES } from './YtAiSkillNetwork'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiSkillNetwork"
      component={YtAiSkillNetwork}
      durationInFrames={EXPERIMENT1_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiSkillNetworkDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
