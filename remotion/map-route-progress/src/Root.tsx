import { Composition, registerRoot } from 'remotion'
import { MapRouteProgress, mapRouteProgressDefaultProps } from './MapRouteProgress'

export function RemotionRoot() {
  return (
    <Composition
      id="MapRouteProgress"
      component={MapRouteProgress}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapRouteProgressDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
