import { Composition, registerRoot } from 'remotion'
import { YtAudioAddVocals, ytAudioAddVocalsDefaultProps , ADD_VOCALS_DURATION_FRAMES } from './YtAudioAddVocals'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioAddVocals"
      component={YtAudioAddVocals}
      durationInFrames={ADD_VOCALS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioAddVocalsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
