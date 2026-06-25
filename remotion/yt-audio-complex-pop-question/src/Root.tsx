import { Composition, registerRoot } from 'remotion'
import { YtAudioComplexPopQuestion, ytAudioComplexPopQuestionDefaultProps } from './YtAudioComplexPopQuestion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioComplexPopQuestion"
      component={YtAudioComplexPopQuestion}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioComplexPopQuestionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
