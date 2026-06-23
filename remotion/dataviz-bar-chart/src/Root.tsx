import { Composition, registerRoot } from 'remotion'
import { DatavizBarChart, datavizBarChartDefaultProps } from './DatavizBarChart'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizBarChart"
      component={DatavizBarChart}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizBarChartDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
