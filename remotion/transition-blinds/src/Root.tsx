import { Composition, registerRoot } from 'remotion'
import { TransitionBlinds, transitionBlindsDefaultProps } from './TransitionBlinds'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionBlinds"
      component={TransitionBlinds}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionBlindsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
