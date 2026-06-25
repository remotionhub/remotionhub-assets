import { Composition, registerRoot } from 'remotion'
import { YtDistributionHard, ytDistributionHardDefaultProps , DISTRIBUTION_HARD_DURATION_FRAMES } from './YtDistributionHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionHard"
      component={YtDistributionHard}
      durationInFrames={DISTRIBUTION_HARD_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionHardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
