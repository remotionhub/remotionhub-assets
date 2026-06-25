import { Composition, registerRoot } from 'remotion'
import { YtBuildTrustFirst, ytBuildTrustFirstDefaultProps , BUILD_TRUST_FIRST_DURATION_FRAMES } from './YtBuildTrustFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildTrustFirst"
      component={YtBuildTrustFirst}
      durationInFrames={BUILD_TRUST_FIRST_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildTrustFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
