import { Composition, registerRoot } from 'remotion'
import { MapPinDrop, mapPinDropDefaultProps } from './MapPinDrop'

export function RemotionRoot() {
  return (
    <Composition
      id="MapPinDrop"
      component={MapPinDrop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPinDropDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
