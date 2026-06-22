import { Composition, registerRoot } from 'remotion'
import { LogoOrbitReveal, logoOrbitRevealDefaultProps } from './LogoOrbitReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoOrbitReveal"
      component={LogoOrbitReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoOrbitRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
