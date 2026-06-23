import { Composition, registerRoot } from 'remotion'
import { YtAiUseCases, ytAiUseCasesDefaultProps } from './YtAiUseCases'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiUseCases"
      component={YtAiUseCases}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiUseCasesDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
