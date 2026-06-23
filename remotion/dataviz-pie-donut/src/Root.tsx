import { Composition, registerRoot } from 'remotion'
import { DatavizPieDonut, datavizPieDonutDefaultProps } from './DatavizPieDonut'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizPieDonut"
      component={DatavizPieDonut}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizPieDonutDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
