import { Composition, registerRoot } from 'remotion'
import { IntroMinimalFade, introMinimalFadeDefaultProps } from './IntroMinimalFade'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroMinimalFade"
      component={IntroMinimalFade}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introMinimalFadeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
