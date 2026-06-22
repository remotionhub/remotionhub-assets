import { Composition, registerRoot } from 'remotion'
import { MapPathTrace, mapPathTraceDefaultProps } from './MapPathTrace'

export function RemotionRoot() {
  return (
    <Composition
      id="MapPathTrace"
      component={MapPathTrace}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapPathTraceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
