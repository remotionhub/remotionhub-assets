import { Composition, registerRoot } from 'remotion'
import { YtCanDoAnimation, ytCanDoAnimationDefaultProps, CAN_DO_ANIMATION_DURATION_FRAMES } from './YtCanDoAnimation'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCanDoAnimation"
      component={YtCanDoAnimation}
      durationInFrames={CAN_DO_ANIMATION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCanDoAnimationDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
