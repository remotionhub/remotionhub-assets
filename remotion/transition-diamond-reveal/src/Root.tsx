import { Composition, registerRoot } from 'remotion'
import { TransitionDiamondReveal, transitionDiamondRevealDefaultProps } from './TransitionDiamondReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionDiamondReveal"
      component={TransitionDiamondReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionDiamondRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
