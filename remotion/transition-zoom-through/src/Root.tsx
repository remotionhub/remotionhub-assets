import { Composition, registerRoot } from 'remotion'
import { TransitionZoomThrough, transitionZoomThroughDefaultProps } from './TransitionZoomThrough'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionZoomThrough"
      component={TransitionZoomThrough}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionZoomThroughDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
