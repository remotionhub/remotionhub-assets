import { Composition, registerRoot } from 'remotion'
import { SocialRedditFeed, socialRedditFeedDefaultProps } from './SocialRedditFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialRedditFeed"
      component={SocialRedditFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialRedditFeedDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
