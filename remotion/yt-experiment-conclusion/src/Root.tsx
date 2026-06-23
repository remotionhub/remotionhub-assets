import { Composition, registerRoot } from 'remotion'
import { YtExperimentConclusion, ytExperimentConclusionDefaultProps } from './YtExperimentConclusion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExperimentConclusion"
      component={YtExperimentConclusion}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExperimentConclusionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
