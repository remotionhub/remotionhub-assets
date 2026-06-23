import { Composition, registerRoot } from 'remotion'
import { DatavizProgressRing, datavizProgressRingDefaultProps } from './DatavizProgressRing'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizProgressRing"
      component={DatavizProgressRing}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizProgressRingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
