import { Composition, registerRoot } from 'remotion'
import { YtThinkDistribution, ytThinkDistributionDefaultProps , THINK_DISTRIBUTION_221_DURATION_FRAMES } from './YtThinkDistribution'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThinkDistribution"
      component={YtThinkDistribution}
      durationInFrames={THINK_DISTRIBUTION_221_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThinkDistributionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
