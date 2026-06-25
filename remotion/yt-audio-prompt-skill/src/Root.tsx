import { Composition, registerRoot } from 'remotion'
import { YtAudioPromptSkill, ytAudioPromptSkillDefaultProps , PROMPT_SKILL_DURATION_FRAMES } from './YtAudioPromptSkill'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAudioPromptSkill"
      component={YtAudioPromptSkill}
      durationInFrames={PROMPT_SKILL_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAudioPromptSkillDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
