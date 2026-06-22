import { Composition, registerRoot } from 'remotion'
import { LogoPinDrop, logoPinDropDefaultProps } from './LogoPinDrop'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoPinDrop"
      component={LogoPinDrop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoPinDropDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
