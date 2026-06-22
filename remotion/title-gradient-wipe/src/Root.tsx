import { Composition, registerRoot } from 'remotion'
import { TitleGradientWipe, titleGradientWipeDefaultProps } from './TitleGradientWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleGradientWipe"
      component={TitleGradientWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGradientWipeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
