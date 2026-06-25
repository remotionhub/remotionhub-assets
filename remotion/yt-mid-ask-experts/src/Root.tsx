import { Composition, registerRoot } from 'remotion'
import { YtMidAskExperts, ytMidAskExpertsDefaultProps , MID_ASK_EXPERTS_DURATION_FRAMES } from './YtMidAskExperts'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMidAskExperts"
      component={YtMidAskExperts}
      durationInFrames={MID_ASK_EXPERTS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMidAskExpertsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
