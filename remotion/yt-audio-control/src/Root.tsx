import { Composition, registerRoot } from 'remotion'
import { YtAudioControl, ytAudioControlDefaultProps } from './YtAudioControl'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioControl"
      component={YtAudioControl}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioControlDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
