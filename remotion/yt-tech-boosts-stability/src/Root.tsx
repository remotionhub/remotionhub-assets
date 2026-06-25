import { Composition, registerRoot } from 'remotion'
import { YtTechBoostsStability, ytTechBoostsStabilityDefaultProps , TECH_BOOSTS_STABILITY_DURATION_FRAMES } from './YtTechBoostsStability'

export function RemotionRoot() {
  return (
    <Composition
      id="YtTechBoostsStability"
      component={YtTechBoostsStability}
      durationInFrames={TECH_BOOSTS_STABILITY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytTechBoostsStabilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
