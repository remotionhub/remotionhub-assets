import { Composition, registerRoot } from 'remotion'
import { SocialTiktok, socialTiktokDefaultProps } from './SocialTiktok'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTiktok"
      component={SocialTiktok}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTiktokDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
