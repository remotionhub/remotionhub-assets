import { Composition, registerRoot } from 'remotion'
import { YtAiUseCases, ytAiUseCasesDefaultProps, AI_USE_CASES_DURATION_FRAMES } from './YtAiUseCases'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiUseCases"
      component={YtAiUseCases}
      durationInFrames={AI_USE_CASES_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiUseCasesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
