import { Composition, registerRoot } from 'remotion'
import { YtAudioLetsStart, ytAudioLetsStartDefaultProps } from './YtAudioLetsStart'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioLetsStart"
      component={YtAudioLetsStart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioLetsStartDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
