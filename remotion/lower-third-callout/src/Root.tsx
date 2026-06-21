import { Composition, registerRoot } from 'remotion'
import { LowerThirdCallout, lowerThirdCalloutDefaultProps } from './LowerThirdCallout'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdCallout"
      component={LowerThirdCallout}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdCalloutDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
