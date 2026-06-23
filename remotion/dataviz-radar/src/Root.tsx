import { Composition, registerRoot } from 'remotion'
import { DatavizRadar, datavizRadarDefaultProps } from './DatavizRadar'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizRadar"
      component={DatavizRadar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizRadarDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
