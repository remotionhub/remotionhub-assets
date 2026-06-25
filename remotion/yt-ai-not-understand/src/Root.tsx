import { Composition, registerRoot } from 'remotion'
import { YtAiNotUnderstand, ytAiNotUnderstandDefaultProps , NOT_UNDERSTAND_DURATION_FRAMES } from './YtAiNotUnderstand'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiNotUnderstand"
      component={YtAiNotUnderstand}
      durationInFrames={NOT_UNDERSTAND_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiNotUnderstandDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
