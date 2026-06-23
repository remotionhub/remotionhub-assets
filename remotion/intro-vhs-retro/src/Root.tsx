import { Composition, registerRoot } from 'remotion'
import { IntroVhsRetro, introVhsRetroDefaultProps } from './IntroVhsRetro'

export function RemotionRoot() {
  return (
    <Composition
      id="IntroVhsRetro"
      component={IntroVhsRetro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={introVhsRetroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
