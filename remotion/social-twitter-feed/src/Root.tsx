import { Composition, registerRoot } from 'remotion'
import { SocialTwitterFeed, socialTwitterFeedDefaultProps } from './SocialTwitterFeed'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTwitterFeed"
      component={SocialTwitterFeed}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTwitterFeedDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
