import { Composition, registerRoot } from 'remotion'
import { YtIdeaCheck, ytIdeaCheckDefaultProps } from './YtIdeaCheck'

export function RemotionRoot() {
  return (
    <Composition
      id="YtIdeaCheck"
      component={YtIdeaCheck}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytIdeaCheckDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
