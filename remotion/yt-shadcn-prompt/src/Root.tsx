import { Composition, registerRoot } from 'remotion'
import { YtShadcnPrompt, ytShadcnPromptDefaultProps } from './YtShadcnPrompt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnPrompt"
      component={YtShadcnPrompt}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnPromptDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
