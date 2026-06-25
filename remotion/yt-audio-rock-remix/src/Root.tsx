import { Composition, registerRoot } from 'remotion'
import { YtAudioRockRemix, ytAudioRockRemixDefaultProps , ROCK_REMIX_DURATION_FRAMES } from './YtAudioRockRemix'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioRockRemix"
      component={YtAudioRockRemix}
      durationInFrames={ROCK_REMIX_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioRockRemixDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
