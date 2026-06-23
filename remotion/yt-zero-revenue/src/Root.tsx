import { Composition, registerRoot } from 'remotion'
import { YtZeroRevenue, ytZeroRevenueDefaultProps } from './YtZeroRevenue'

export function RemotionRoot() {
  return (
    <Composition
      id="YtZeroRevenue"
      component={YtZeroRevenue}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytZeroRevenueDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
