import { Composition, registerRoot } from 'remotion'
import { LogoMinimalDot, logoMinimalDotDefaultProps } from './LogoMinimalDot'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoMinimalDot"
      component={LogoMinimalDot}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoMinimalDotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
