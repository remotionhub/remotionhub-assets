import { Composition, registerRoot } from 'remotion'
import { YtDistributionFirst, ytDistributionFirstDefaultProps } from './YtDistributionFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDistributionFirst"
      component={YtDistributionFirst}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDistributionFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
