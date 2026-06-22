import { Composition, registerRoot } from 'remotion'
import { LowerThirdGradientBar, lowerThirdGradientBarDefaultProps } from './LowerThirdGradientBar'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdGradientBar"
      component={LowerThirdGradientBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdGradientBarDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
