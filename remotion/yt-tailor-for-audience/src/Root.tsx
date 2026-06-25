import { Composition, registerRoot } from 'remotion'
import { YtTailorForAudience, ytTailorForAudienceDefaultProps } from './YtTailorForAudience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTailorForAudience"
      component={YtTailorForAudience}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTailorForAudienceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
