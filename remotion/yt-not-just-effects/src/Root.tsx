import { Composition, registerRoot } from 'remotion'
import { YtNotJustEffects, ytNotJustEffectsDefaultProps, NOT_JUST_EFFECTS_DURATION_FRAMES } from './YtNotJustEffects'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotJustEffects"
      component={YtNotJustEffects}
      durationInFrames={NOT_JUST_EFFECTS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotJustEffectsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
