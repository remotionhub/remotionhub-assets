import { Composition, registerRoot } from 'remotion'
import { TitleGlitchText, titleGlitchTextDefaultProps } from './TitleGlitchText'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleGlitchText"
      component={TitleGlitchText}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleGlitchTextDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
