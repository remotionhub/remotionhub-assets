import { Composition, registerRoot } from 'remotion'
import { YtInsideTheProblem, ytInsideTheProblemDefaultProps } from './YtInsideTheProblem'

export function RemotionRoot() {
  return (
    <Composition
      id="YtInsideTheProblem"
      component={YtInsideTheProblem}
      durationInFrames={210}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytInsideTheProblemDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
