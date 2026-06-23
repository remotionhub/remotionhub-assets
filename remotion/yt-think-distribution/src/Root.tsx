import { Composition, registerRoot } from 'remotion'
import { YtThinkDistribution, ytThinkDistributionDefaultProps } from './YtThinkDistribution'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThinkDistribution"
      component={YtThinkDistribution}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThinkDistributionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
