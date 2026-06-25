import { Composition, registerRoot } from 'remotion'
import { YtAudioSoftwareCriteria, ytAudioSoftwareCriteriaDefaultProps , SOFTWARE_CRITERIA_DURATION_FRAMES } from './YtAudioSoftwareCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioSoftwareCriteria"
      component={YtAudioSoftwareCriteria}
      durationInFrames={SOFTWARE_CRITERIA_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioSoftwareCriteriaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
