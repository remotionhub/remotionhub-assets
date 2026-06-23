import { Composition, registerRoot } from 'remotion'
import { SocialGithub, socialGithubDefaultProps } from './SocialGithub'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialGithub"
      component={SocialGithub}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialGithubDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
