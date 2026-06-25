import { Composition, registerRoot } from 'remotion'
import { YtScatterShot, ytScatterShotDefaultProps , SCATTER_SHOT_DURATION_FRAMES } from './YtScatterShot'

export function RemotionRoot() {
  return (
    <Composition
      id="YtScatterShot"
      component={YtScatterShot}
      durationInFrames={SCATTER_SHOT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytScatterShotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
