import { Composition, registerRoot } from 'remotion'
import { YtFocusOneTopic, ytFocusOneTopicDefaultProps , FOCUS_ONE_TOPIC_DURATION_FRAMES } from './YtFocusOneTopic'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFocusOneTopic"
      component={YtFocusOneTopic}
      durationInFrames={FOCUS_ONE_TOPIC_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFocusOneTopicDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
