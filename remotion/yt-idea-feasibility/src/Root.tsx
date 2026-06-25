import { Composition, registerRoot } from 'remotion'
import { YtIdeaFeasibility, ytIdeaFeasibilityDefaultProps, IDEA_FEASIBILITY_DURATION_FRAMES } from './YtIdeaFeasibility'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaFeasibility"
      component={YtIdeaFeasibility}
      durationInFrames={IDEA_FEASIBILITY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaFeasibilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
