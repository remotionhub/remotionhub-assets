import { Composition, registerRoot } from 'remotion'
import { YtIterateTwoDays, ytIterateTwoDaysDefaultProps , ITERATE_TWO_DAYS_213_DURATION_FRAMES } from './YtIterateTwoDays'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIterateTwoDays"
      component={YtIterateTwoDays}
      durationInFrames={ITERATE_TWO_DAYS_213_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIterateTwoDaysDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
