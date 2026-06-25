import { Composition, registerRoot } from 'remotion'
import { YtPageScrollMetrics, ytPageScrollMetricsDefaultProps } from './YtPageScrollMetrics'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPageScrollMetrics"
      component={YtPageScrollMetrics}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPageScrollMetricsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
