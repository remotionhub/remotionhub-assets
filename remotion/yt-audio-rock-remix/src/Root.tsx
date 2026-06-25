import { Composition, registerRoot } from 'remotion'
import { YtAudioRockRemix, ytAudioRockRemixDefaultProps } from './YtAudioRockRemix'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioRockRemix"
      component={YtAudioRockRemix}
      durationInFrames={300}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioRockRemixDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
