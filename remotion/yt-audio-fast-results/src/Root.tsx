import { Composition, registerRoot } from 'remotion'
import { YtAudioFastResults, ytAudioFastResultsDefaultProps , FAST_RESULTS_DURATION_FRAMES } from './YtAudioFastResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioFastResults"
      component={YtAudioFastResults}
      durationInFrames={FAST_RESULTS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioFastResultsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
