import { Composition, registerRoot } from 'remotion'
import { AudioCircleViz, audioCircleVizDefaultProps } from './AudioCircleViz'

export function RemotionRoot() {
  return (
    <Composition
      id="AudioCircleViz"
      component={AudioCircleViz}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={audioCircleVizDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
