import { Composition, registerRoot } from 'remotion'
import { SocialTestimonialWall, socialTestimonialWallDefaultProps } from './SocialTestimonialWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTestimonialWall"
      component={SocialTestimonialWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTestimonialWallDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
