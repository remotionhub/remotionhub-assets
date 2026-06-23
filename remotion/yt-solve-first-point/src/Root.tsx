import { Composition, registerRoot } from 'remotion'
import { YtSolveFirstPoint, ytSolveFirstPointDefaultProps } from './YtSolveFirstPoint'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSolveFirstPoint"
      component={YtSolveFirstPoint}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSolveFirstPointDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
