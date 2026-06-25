import { Composition, registerRoot } from 'remotion'
import { YtAnimationSuffice, ytAnimationSufficeDefaultProps, ANIMATION_SUFFICE_DURATION_FRAMES } from './YtAnimationSuffice'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAnimationSuffice"
      component={YtAnimationSuffice}
      durationInFrames={ANIMATION_SUFFICE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAnimationSufficeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
