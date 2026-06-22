import { Composition, registerRoot } from 'remotion'
import { MapRadarScan, mapRadarScanDefaultProps } from './MapRadarScan'

export function RemotionRoot() {
  return (
    <Composition
      id="MapRadarScan"
      component={MapRadarScan}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRadarScanDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
