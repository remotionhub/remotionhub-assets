import { Composition, registerRoot } from 'remotion'
import { AudioBarSpectrum, audioBarSpectrumDefaultProps } from './AudioBarSpectrum'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioBarSpectrum"
      component={AudioBarSpectrum}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioBarSpectrumDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
