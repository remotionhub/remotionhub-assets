import { Composition, registerRoot } from 'remotion'
import { YtBuildStability, ytBuildStabilityDefaultProps , BUILD_STABILITY_DURATION_FRAMES } from './YtBuildStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildStability"
      component={YtBuildStability}
      durationInFrames={BUILD_STABILITY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildStabilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
