import { Composition, registerRoot } from 'remotion'
import { TransitionSpinZoom, transitionSpinZoomDefaultProps } from './TransitionSpinZoom'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionSpinZoom"
      component={TransitionSpinZoom}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionSpinZoomDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
