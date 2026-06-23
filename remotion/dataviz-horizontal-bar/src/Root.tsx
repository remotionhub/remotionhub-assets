import { Composition, registerRoot } from 'remotion'
import { DatavizHorizontalBar, datavizHorizontalBarDefaultProps } from './DatavizHorizontalBar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizHorizontalBar"
      component={DatavizHorizontalBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizHorizontalBarDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
