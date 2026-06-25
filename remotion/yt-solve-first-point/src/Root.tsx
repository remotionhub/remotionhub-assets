import { Composition, registerRoot } from 'remotion'
import { YtSolveFirstPoint, ytSolveFirstPointDefaultProps, SOLVE_FIRST_POINT_DURATION_FRAMES } from './YtSolveFirstPoint'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSolveFirstPoint"
      component={YtSolveFirstPoint}
      durationInFrames={SOLVE_FIRST_POINT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSolveFirstPointDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
