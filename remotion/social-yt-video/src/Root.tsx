import { Composition, registerRoot } from 'remotion'
import { SocialYtVideo, socialYtVideoDefaultProps } from './SocialYtVideo'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialYtVideo"
      component={SocialYtVideo}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialYtVideoDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
