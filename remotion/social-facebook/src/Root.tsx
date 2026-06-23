import { Composition, registerRoot } from 'remotion'
import { SocialFacebook, socialFacebookDefaultProps } from './SocialFacebook'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialFacebook"
      component={SocialFacebook}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialFacebookDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
