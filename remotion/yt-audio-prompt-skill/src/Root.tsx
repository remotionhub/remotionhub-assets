import { Composition, registerRoot } from 'remotion'
import { YtAudioPromptSkill, ytAudioPromptSkillDefaultProps } from './YtAudioPromptSkill'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioPromptSkill"
      component={YtAudioPromptSkill}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioPromptSkillDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
