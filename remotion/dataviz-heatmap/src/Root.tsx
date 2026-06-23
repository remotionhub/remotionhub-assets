import { Composition, registerRoot } from 'remotion'
import { DatavizHeatmap, datavizHeatmapDefaultProps } from './DatavizHeatmap'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizHeatmap"
      component={DatavizHeatmap}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizHeatmapDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
