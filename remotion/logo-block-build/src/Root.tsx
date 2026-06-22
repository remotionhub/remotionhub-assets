import { Composition, registerRoot } from 'remotion'
import { LogoBlockBuild, logoBlockBuildDefaultProps } from './LogoBlockBuild'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoBlockBuild"
      component={LogoBlockBuild}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoBlockBuildDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
