import { Composition, registerRoot } from 'remotion'
import { LogoBrandKit, logoBrandKitDefaultProps } from './LogoBrandKit'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoBrandKit"
      component={LogoBrandKit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoBrandKitDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
