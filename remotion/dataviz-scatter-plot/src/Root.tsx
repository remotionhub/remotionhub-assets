import { Composition, registerRoot } from 'remotion'
import { DatavizScatterPlot, datavizScatterPlotDefaultProps } from './DatavizScatterPlot'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizScatterPlot"
      component={DatavizScatterPlot}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizScatterPlotDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
