import { Composition, registerRoot } from 'remotion'
import { YtTechBoostsStability, ytTechBoostsStabilityDefaultProps } from './YtTechBoostsStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTechBoostsStability"
      component={YtTechBoostsStability}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTechBoostsStabilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
