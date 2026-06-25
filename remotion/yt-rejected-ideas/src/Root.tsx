import { Composition, registerRoot } from 'remotion'
import { YtRejectedIdeas, ytRejectedIdeasDefaultProps, REJECTED_IDEAS_DURATION_FRAMES } from './YtRejectedIdeas'

export function RemotionRoot() {
  return (
    <Composition
      id="YtRejectedIdeas"
      component={YtRejectedIdeas}
      durationInFrames={REJECTED_IDEAS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytRejectedIdeasDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
