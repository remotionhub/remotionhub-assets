import { Composition, registerRoot } from 'remotion'
import { YtTailorForAudience, ytTailorForAudienceDefaultProps, TAILOR_FOR_AUDIENCE_DURATION_FRAMES } from './YtTailorForAudience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTailorForAudience"
      component={YtTailorForAudience}
      durationInFrames={TAILOR_FOR_AUDIENCE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTailorForAudienceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
