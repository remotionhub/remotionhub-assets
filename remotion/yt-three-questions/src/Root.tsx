import { Composition, registerRoot } from 'remotion'
import { YtThreeQuestions, ytThreeQuestionsDefaultProps, THREE_QUESTIONS_DURATION_FRAMES } from './YtThreeQuestions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeQuestions"
      component={YtThreeQuestions}
      durationInFrames={THREE_QUESTIONS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeQuestionsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
