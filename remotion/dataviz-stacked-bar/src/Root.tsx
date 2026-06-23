import { Composition, registerRoot } from 'remotion'
import { DatavizStackedBar, datavizStackedBarDefaultProps } from './DatavizStackedBar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizStackedBar"
      component={DatavizStackedBar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizStackedBarDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
