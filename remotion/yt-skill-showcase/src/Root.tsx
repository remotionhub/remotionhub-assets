import { Composition, registerRoot } from 'remotion'
import { YtSkillShowcase, ytSkillShowcaseDefaultProps , SKILL_SHOWCASE_DURATION_FRAMES } from './YtSkillShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSkillShowcase"
      component={YtSkillShowcase}
      durationInFrames={SKILL_SHOWCASE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSkillShowcaseDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
