import { Composition, registerRoot } from 'remotion'
import { YtAiNotUnderstand, ytAiNotUnderstandDefaultProps } from './YtAiNotUnderstand'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiNotUnderstand"
      component={YtAiNotUnderstand}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiNotUnderstandDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
