import { Composition, registerRoot } from 'remotion'
import { IntroLogoMorph, introLogoMorphDefaultProps } from './IntroLogoMorph'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroLogoMorph"
      component={IntroLogoMorph}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introLogoMorphDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
