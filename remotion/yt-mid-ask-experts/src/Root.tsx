import { Composition, registerRoot } from 'remotion'
import { YtMidAskExperts, ytMidAskExpertsDefaultProps } from './YtMidAskExperts'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMidAskExperts"
      component={YtMidAskExperts}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMidAskExpertsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
