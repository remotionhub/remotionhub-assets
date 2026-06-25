import { Composition, registerRoot } from 'remotion'
import { YtShadcnPrompt, ytShadcnPromptDefaultProps, SHADCN_PROMPT_DURATION_FRAMES } from './YtShadcnPrompt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnPrompt"
      component={YtShadcnPrompt}
      durationInFrames={SHADCN_PROMPT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnPromptDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
