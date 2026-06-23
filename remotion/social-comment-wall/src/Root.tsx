import { Composition, registerRoot } from 'remotion'
import { SocialCommentWall, socialCommentWallDefaultProps } from './SocialCommentWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialCommentWall"
      component={SocialCommentWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialCommentWallDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
