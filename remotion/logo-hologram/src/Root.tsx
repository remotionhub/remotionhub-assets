import { Composition, registerRoot } from 'remotion'
import { LogoHologram, logoHologramDefaultProps } from './LogoHologram'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoHologram"
      component={LogoHologram}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoHologramDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
