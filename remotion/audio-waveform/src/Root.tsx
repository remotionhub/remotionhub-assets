import { Composition, registerRoot } from 'remotion'
import { AudioWaveform, audioWaveformDefaultProps } from './AudioWaveform'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioWaveform"
      component={AudioWaveform}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioWaveformDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
