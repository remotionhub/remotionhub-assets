import { Composition, registerRoot } from 'remotion'
import { YtScatterShot, ytScatterShotDefaultProps } from './YtScatterShot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtScatterShot"
      component={YtScatterShot}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytScatterShotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
