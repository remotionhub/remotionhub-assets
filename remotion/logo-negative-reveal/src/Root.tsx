import { Composition, registerRoot } from 'remotion'
import { LogoNegativeReveal, logoNegativeRevealDefaultProps } from './LogoNegativeReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoNegativeReveal"
      component={LogoNegativeReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoNegativeRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
