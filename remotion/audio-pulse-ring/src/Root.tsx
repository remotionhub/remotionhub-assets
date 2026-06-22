import { Composition, registerRoot } from 'remotion'
import { AudioPulseRing, audioPulseRingDefaultProps } from './AudioPulseRing'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioPulseRing"
      component={AudioPulseRing}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioPulseRingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
