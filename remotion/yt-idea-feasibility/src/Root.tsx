import { Composition, registerRoot } from 'remotion'
import { YtIdeaFeasibility, ytIdeaFeasibilityDefaultProps } from './YtIdeaFeasibility'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaFeasibility"
      component={YtIdeaFeasibility}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaFeasibilityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
