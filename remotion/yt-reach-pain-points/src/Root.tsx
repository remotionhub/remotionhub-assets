import { Composition, registerRoot } from 'remotion'
import { YtReachPainPoints, ytReachPainPointsDefaultProps, REACH_PAIN_POINTS_DURATION_FRAMES } from './YtReachPainPoints'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReachPainPoints"
      component={YtReachPainPoints}
      durationInFrames={REACH_PAIN_POINTS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReachPainPointsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
