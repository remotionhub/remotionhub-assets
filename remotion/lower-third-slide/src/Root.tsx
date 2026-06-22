import { Composition, registerRoot } from 'remotion'
import { LowerThirdSlide, lowerThirdSlideDefaultProps } from './LowerThirdSlide'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdSlide"
      component={LowerThirdSlide}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdSlideDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
