import { Composition, registerRoot } from 'remotion'
import { LowerThirdLineExpand, lowerThirdLineExpandDefaultProps } from './LowerThirdLineExpand'

export function RemotionRoot() {
  return (
    <Composition
      id="LowerThirdLineExpand"
      component={LowerThirdLineExpand}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={lowerThirdLineExpandDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
