import { Composition, registerRoot } from 'remotion'
import { LowerThirdBoxPop, lowerThirdBoxPopDefaultProps } from './LowerThirdBoxPop'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdBoxPop"
      component={LowerThirdBoxPop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdBoxPopDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
