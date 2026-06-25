import { Composition, registerRoot } from 'remotion'
import { YtEquityDesign, ytEquityDesignDefaultProps , EQUITY_DESIGN_DURATION_FRAMES } from './YtEquityDesign'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEquityDesign"
      component={YtEquityDesign}
      durationInFrames={EQUITY_DESIGN_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEquityDesignDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
