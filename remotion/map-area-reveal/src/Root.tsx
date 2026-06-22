import { Composition, registerRoot } from 'remotion'
import { MapAreaReveal, mapAreaRevealDefaultProps } from './MapAreaReveal'

export function RemotionRoot() {
  return (
    <Composition
      id="MapAreaReveal"
      component={MapAreaReveal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={mapAreaRevealDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
