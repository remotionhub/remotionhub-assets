import { Composition, registerRoot } from 'remotion'
import { LowerThirdSocial, lowerThirdSocialDefaultProps } from './LowerThirdSocial'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdSocial"
      component={LowerThirdSocial}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdSocialDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
