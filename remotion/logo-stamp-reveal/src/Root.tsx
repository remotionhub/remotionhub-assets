import { Composition, registerRoot } from 'remotion'
import { LogoStampReveal, logoStampRevealDefaultProps } from './LogoStampReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoStampReveal"
      component={LogoStampReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoStampRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
