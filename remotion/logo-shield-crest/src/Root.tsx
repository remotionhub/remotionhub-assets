import { Composition, registerRoot } from 'remotion'
import { LogoShieldCrest, logoShieldCrestDefaultProps } from './LogoShieldCrest'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoShieldCrest"
      component={LogoShieldCrest}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoShieldCrestDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
