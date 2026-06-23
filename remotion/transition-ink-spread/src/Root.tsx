import { Composition, registerRoot } from 'remotion'
import { TransitionInkSpread, transitionInkSpreadDefaultProps } from './TransitionInkSpread'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionInkSpread"
      component={TransitionInkSpread}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionInkSpreadDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
