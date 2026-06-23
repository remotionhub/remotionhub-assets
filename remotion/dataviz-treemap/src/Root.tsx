import { Composition, registerRoot } from 'remotion'
import { DatavizTreemap, datavizTreemapDefaultProps } from './DatavizTreemap'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizTreemap"
      component={DatavizTreemap}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizTreemapDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
