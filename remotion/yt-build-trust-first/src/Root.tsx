import { Composition, registerRoot } from 'remotion'
import { YtBuildTrustFirst, ytBuildTrustFirstDefaultProps } from './YtBuildTrustFirst'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildTrustFirst"
      component={YtBuildTrustFirst}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildTrustFirstDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
