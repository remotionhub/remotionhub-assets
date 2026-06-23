import { Composition, registerRoot } from 'remotion'
import { YtEquityDesign, ytEquityDesignDefaultProps } from './YtEquityDesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEquityDesign"
      component={YtEquityDesign}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEquityDesignDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
