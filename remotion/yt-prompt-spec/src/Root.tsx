import { Composition, registerRoot } from 'remotion'
import { YtPromptSpec, ytPromptSpecDefaultProps , PROMPT_SPEC_207_DURATION_FRAMES } from './YtPromptSpec'

export function RemotionRoot() {
  return (
    <Composition
      id="YtPromptSpec"
      component={YtPromptSpec}
      durationInFrames={PROMPT_SPEC_207_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytPromptSpecDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
