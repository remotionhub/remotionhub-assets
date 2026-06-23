import { Composition, registerRoot } from 'remotion'
import { SocialTrending, socialTrendingDefaultProps } from './SocialTrending'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialTrending"
      component={SocialTrending}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialTrendingDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
