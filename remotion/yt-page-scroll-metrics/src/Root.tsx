import { Composition, registerRoot } from 'remotion'
import { YtPageScrollMetrics, ytPageScrollMetricsDefaultProps , PAGE_SCROLL_METRICS_DURATION_FRAMES } from './YtPageScrollMetrics'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPageScrollMetrics"
      component={YtPageScrollMetrics}
      durationInFrames={PAGE_SCROLL_METRICS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPageScrollMetricsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
