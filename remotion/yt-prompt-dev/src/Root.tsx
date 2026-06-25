import { Composition, registerRoot } from 'remotion'
import { YtPromptDev, ytPromptDevDefaultProps , PROMPT_DEV_208_DURATION_FRAMES } from './YtPromptDev'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptDev"
      component={YtPromptDev}
      durationInFrames={PROMPT_DEV_208_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptDevDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
