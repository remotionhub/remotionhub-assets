import { Composition, registerRoot } from 'remotion'
import { SocialProducthunt, socialProducthuntDefaultProps } from './SocialProducthunt'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialProducthunt"
      component={SocialProducthunt}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialProducthuntDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
