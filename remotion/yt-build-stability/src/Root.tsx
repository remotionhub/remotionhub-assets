import { Composition, registerRoot } from 'remotion'
import { YtBuildStability, ytBuildStabilityDefaultProps } from './YtBuildStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBuildStability"
      component={YtBuildStability}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBuildStabilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
