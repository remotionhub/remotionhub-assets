import { Composition, registerRoot } from 'remotion'
import { YtNotJustEffects, ytNotJustEffectsDefaultProps } from './YtNotJustEffects'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotJustEffects"
      component={YtNotJustEffects}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotJustEffectsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
