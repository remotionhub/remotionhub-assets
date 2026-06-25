import { Composition, registerRoot } from 'remotion'
import { YtAudioSoftwareCriteria, ytAudioSoftwareCriteriaDefaultProps } from './YtAudioSoftwareCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioSoftwareCriteria"
      component={YtAudioSoftwareCriteria}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioSoftwareCriteriaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
