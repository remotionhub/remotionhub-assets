import { Composition, registerRoot } from 'remotion'
import { YtCharAnimations, ytCharAnimationsDefaultProps, CHAR_ANIMATIONS_DURATION_FRAMES } from './YtCharAnimations'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCharAnimations"
      component={YtCharAnimations}
      durationInFrames={CHAR_ANIMATIONS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCharAnimationsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
