import { Composition, registerRoot } from 'remotion'
import { TransitionPageFlip, transitionPageFlipDefaultProps } from './TransitionPageFlip'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionPageFlip"
      component={TransitionPageFlip}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionPageFlipDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
