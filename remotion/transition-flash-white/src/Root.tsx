import { Composition, registerRoot } from 'remotion'
import { TransitionFlashWhite, transitionFlashWhiteDefaultProps } from './TransitionFlashWhite'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFlashWhite"
      component={TransitionFlashWhite}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFlashWhiteDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
