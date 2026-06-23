import { Composition, registerRoot } from 'remotion'
import { SocialIgPost, socialIgPostDefaultProps } from './SocialIgPost'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialIgPost"
      component={SocialIgPost}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialIgPostDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
