import { Composition, registerRoot } from 'remotion'
import { TransitionMorphCircle, transitionMorphCircleDefaultProps } from './TransitionMorphCircle'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionMorphCircle"
      component={TransitionMorphCircle}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionMorphCircleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
