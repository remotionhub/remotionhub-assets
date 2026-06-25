import { Composition, registerRoot } from 'remotion'
import { YtAudioAddVocals, ytAudioAddVocalsDefaultProps } from './YtAudioAddVocals'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioAddVocals"
      component={YtAudioAddVocals}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioAddVocalsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
