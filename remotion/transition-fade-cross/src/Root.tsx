import { Composition, registerRoot } from 'remotion'
import { TransitionFadeCross, transitionFadeCrossDefaultProps } from './TransitionFadeCross'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFadeCross"
      component={TransitionFadeCross}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFadeCrossDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
