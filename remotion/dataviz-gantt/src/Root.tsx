import { Composition, registerRoot } from 'remotion'
import { DatavizGantt, datavizGanttDefaultProps } from './DatavizGantt'

export function RemotionRoot() {
  return (
    <Composition
      id="DatavizGantt"
      component={DatavizGantt}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={datavizGanttDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
