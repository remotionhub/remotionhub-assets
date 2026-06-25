import { Composition, registerRoot } from 'remotion'
import { YtExperimentConclusion, ytExperimentConclusionDefaultProps, EXPERIMENT_CONCLUSION_DURATION_FRAMES } from './YtExperimentConclusion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtExperimentConclusion"
      component={YtExperimentConclusion}
      durationInFrames={EXPERIMENT_CONCLUSION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytExperimentConclusionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
