import { Composition, registerRoot } from 'remotion'
import { YtFocusOneTopic, ytFocusOneTopicDefaultProps } from './YtFocusOneTopic'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFocusOneTopic"
      component={YtFocusOneTopic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFocusOneTopicDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
