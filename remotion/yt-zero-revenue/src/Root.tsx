import { Composition, registerRoot } from 'remotion'
import { YtZeroRevenue, ytZeroRevenueDefaultProps, ZERO_REVENUE_DURATION_FRAMES } from './YtZeroRevenue'

export function RemotionRoot() {
  return (
    <Composition
      id="YtZeroRevenue"
      component={YtZeroRevenue}
      durationInFrames={ZERO_REVENUE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytZeroRevenueDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
