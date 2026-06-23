import { Composition, registerRoot } from 'remotion'
import { IntroCinematicText, introCinematicTextDefaultProps } from './IntroCinematicText'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroCinematicText"
      component={IntroCinematicText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introCinematicTextDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
