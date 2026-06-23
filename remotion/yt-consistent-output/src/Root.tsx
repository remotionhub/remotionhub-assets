import { Composition, registerRoot } from 'remotion'
import { YtConsistentOutput, ytConsistentOutputDefaultProps } from './YtConsistentOutput'

export function RemotionRoot() {
  return (
    <Composition
      id="YtConsistentOutput"
      component={YtConsistentOutput}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytConsistentOutputDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
