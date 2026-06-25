import { Composition, registerRoot } from 'remotion'
import { YtAudioComplexPopQuestion, ytAudioComplexPopQuestionDefaultProps , COMPLEX_POP_QUESTION_DURATION_FRAMES } from './YtAudioComplexPopQuestion'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioComplexPopQuestion"
      component={YtAudioComplexPopQuestion}
      durationInFrames={COMPLEX_POP_QUESTION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioComplexPopQuestionDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
