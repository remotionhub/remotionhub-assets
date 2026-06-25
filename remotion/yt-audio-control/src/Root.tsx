import { Composition, registerRoot } from 'remotion'
import { YtAudioControl, ytAudioControlDefaultProps , CONTROL_DURATION_FRAMES } from './YtAudioControl'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioControl"
      component={YtAudioControl}
      durationInFrames={CONTROL_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioControlDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
