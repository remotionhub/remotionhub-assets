import { Composition, registerRoot } from 'remotion'
import { LogoGlowPulse, logoGlowPulseDefaultProps } from './LogoGlowPulse'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoGlowPulse"
      component={LogoGlowPulse}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoGlowPulseDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
