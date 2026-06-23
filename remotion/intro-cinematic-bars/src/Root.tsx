import { Composition, registerRoot } from 'remotion'
import { IntroCinematicBars, introCinematicBarsDefaultProps } from './IntroCinematicBars'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCinematicBars"
      component={IntroCinematicBars}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCinematicBarsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
