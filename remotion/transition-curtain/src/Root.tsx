import { Composition, registerRoot } from 'remotion'
import { TransitionCurtain, transitionCurtainDefaultProps } from './TransitionCurtain'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionCurtain"
      component={TransitionCurtain}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionCurtainDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
