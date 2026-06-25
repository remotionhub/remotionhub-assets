import { Composition, registerRoot } from 'remotion'
import { YtFourAiTools, ytFourAiToolsDefaultProps, FOUR_AI_TOOLS_DURATION_FRAMES } from './YtFourAiTools'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFourAiTools"
      component={YtFourAiTools}
      durationInFrames={FOUR_AI_TOOLS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFourAiToolsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
