import { Composition, registerRoot } from 'remotion'
import { SocialLinkedin, socialLinkedinDefaultProps } from './SocialLinkedin'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialLinkedin"
      component={SocialLinkedin}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialLinkedinDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
