import { Composition, registerRoot } from 'remotion'
import { DatavizAreaChart, datavizAreaChartDefaultProps } from './DatavizAreaChart'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizAreaChart"
      component={DatavizAreaChart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizAreaChartDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
