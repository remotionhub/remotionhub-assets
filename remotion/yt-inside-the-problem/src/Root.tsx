import { Composition, registerRoot } from 'remotion'
import { YtInsideTheProblem, ytInsideTheProblemDefaultProps , INSIDE_THE_PROBLEM_DURATION_FRAMES } from './YtInsideTheProblem'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInsideTheProblem"
      component={YtInsideTheProblem}
      durationInFrames={INSIDE_THE_PROBLEM_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInsideTheProblemDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
