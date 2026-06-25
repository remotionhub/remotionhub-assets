import { Composition, registerRoot } from 'remotion'
import { YtSkillShowcase, ytSkillShowcaseDefaultProps } from './YtSkillShowcase'

export function RemotionRoot() {
  return (
    <Composition
      id="YtSkillShowcase"
      component={YtSkillShowcase}
      durationInFrames={600}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytSkillShowcaseDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
