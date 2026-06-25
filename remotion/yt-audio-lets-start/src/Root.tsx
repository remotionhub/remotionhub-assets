import { Composition, registerRoot } from 'remotion'
import { YtAudioLetsStart, ytAudioLetsStartDefaultProps , LETS_START_DURATION_FRAMES } from './YtAudioLetsStart'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioLetsStart"
      component={YtAudioLetsStart}
      durationInFrames={LETS_START_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioLetsStartDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
