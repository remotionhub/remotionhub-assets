import { Composition, registerRoot } from 'remotion'
import { YtReachPainPoints, ytReachPainPointsDefaultProps } from './YtReachPainPoints'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReachPainPoints"
      component={YtReachPainPoints}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReachPainPointsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
