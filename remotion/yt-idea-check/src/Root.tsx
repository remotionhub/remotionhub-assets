import { Composition, registerRoot } from 'remotion'
import { YtIdeaCheck, ytIdeaCheckDefaultProps , IDEA_CHECK_DURATION_FRAMES } from './YtIdeaCheck'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaCheck"
      component={YtIdeaCheck}
      durationInFrames={IDEA_CHECK_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaCheckDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
