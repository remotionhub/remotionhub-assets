import { Composition, registerRoot } from 'remotion'
import { TransitionZoomOutIn, transitionZoomOutInDefaultProps } from './TransitionZoomOutIn'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionZoomOutIn"
      component={TransitionZoomOutIn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionZoomOutInDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
