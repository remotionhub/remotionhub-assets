import { Composition, registerRoot } from 'remotion'
import { TransitionFilmBurn, transitionFilmBurnDefaultProps } from './TransitionFilmBurn'

export function RemotionRoot() {
  return (
    <Composition
      id="TransitionFilmBurn"
      component={TransitionFilmBurn}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={transitionFilmBurnDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
