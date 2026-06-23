import { Composition, registerRoot } from 'remotion'
import { TransitionDiagonalWipe, transitionDiagonalWipeDefaultProps } from './TransitionDiagonalWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionDiagonalWipe"
      component={TransitionDiagonalWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionDiagonalWipeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
