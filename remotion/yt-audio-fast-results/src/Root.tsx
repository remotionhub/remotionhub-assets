import { Composition, registerRoot } from 'remotion'
import { YtAudioFastResults, ytAudioFastResultsDefaultProps } from './YtAudioFastResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioFastResults"
      component={YtAudioFastResults}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioFastResultsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
