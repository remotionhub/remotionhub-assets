import { Composition, registerRoot } from 'remotion'
import { YtDistributionFirst, ytDistributionFirstDefaultProps, DISTRIBUTION_FIRST_DURATION_FRAMES } from './YtDistributionFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionFirst"
      component={YtDistributionFirst}
      durationInFrames={DISTRIBUTION_FIRST_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
