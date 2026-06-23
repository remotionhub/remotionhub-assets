import { Composition, registerRoot } from 'remotion'
import { TransitionPixelate, transitionPixelateDefaultProps } from './TransitionPixelate'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionPixelate"
      component={TransitionPixelate}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionPixelateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
