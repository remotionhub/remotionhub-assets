import { Composition, registerRoot } from 'remotion'
import { LogoEmblem, logoEmblemDefaultProps } from './LogoEmblem'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoEmblem"
      component={LogoEmblem}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoEmblemDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
