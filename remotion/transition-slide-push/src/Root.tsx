import { Composition, registerRoot } from 'remotion'
import { TransitionSlidePush, transitionSlidePushDefaultProps } from './TransitionSlidePush'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSlidePush"
      component={TransitionSlidePush}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSlidePushDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
