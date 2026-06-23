import { Composition, registerRoot } from 'remotion'
import { TransitionWipeClock, transitionWipeClockDefaultProps } from './TransitionWipeClock'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionWipeClock"
      component={TransitionWipeClock}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionWipeClockDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
