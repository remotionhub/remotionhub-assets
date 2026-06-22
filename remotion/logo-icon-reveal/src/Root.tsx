import { Composition, registerRoot } from 'remotion'
import { LogoIconReveal, logoIconRevealDefaultProps } from './LogoIconReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoIconReveal"
      component={LogoIconReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoIconRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
