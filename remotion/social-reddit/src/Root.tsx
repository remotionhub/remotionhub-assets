import { Composition, registerRoot } from 'remotion'
import { SocialReddit, socialRedditDefaultProps } from './SocialReddit'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialReddit"
      component={SocialReddit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialRedditDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
