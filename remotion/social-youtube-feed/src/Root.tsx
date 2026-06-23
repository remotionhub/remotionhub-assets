import { Composition, registerRoot } from 'remotion'
import { SocialYoutubeFeed, socialYoutubeFeedDefaultProps } from './SocialYoutubeFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialYoutubeFeed"
      component={SocialYoutubeFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialYoutubeFeedDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
