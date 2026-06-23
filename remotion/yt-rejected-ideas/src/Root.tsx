import { Composition, registerRoot } from 'remotion'
import { YtRejectedIdeas, ytRejectedIdeasDefaultProps } from './YtRejectedIdeas'

export function RemotionRoot() {
  return (
    <Composition
      id="YtRejectedIdeas"
      component={YtRejectedIdeas}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytRejectedIdeasDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
