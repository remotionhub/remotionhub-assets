import { Composition, registerRoot } from 'remotion'
import { LowerThirdMinimal, lowerThirdMinimalDefaultProps } from './LowerThirdMinimal'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdMinimal"
      component={LowerThirdMinimal}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdMinimalDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
