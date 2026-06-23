import { Composition, registerRoot } from 'remotion'
import { YtDistributionHard, ytDistributionHardDefaultProps } from './YtDistributionHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionHard"
      component={YtDistributionHard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionHardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
