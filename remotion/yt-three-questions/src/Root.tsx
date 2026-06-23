import { Composition, registerRoot } from 'remotion'
import { YtThreeQuestions, ytThreeQuestionsDefaultProps } from './YtThreeQuestions'

export function RemotionRoot() {
  return (
    <Composition
      id="YtThreeQuestions"
      component={YtThreeQuestions}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytThreeQuestionsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
