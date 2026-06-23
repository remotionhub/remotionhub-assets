import { Composition, registerRoot } from 'remotion'
import { SocialStatsWall, socialStatsWallDefaultProps } from './SocialStatsWall'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialStatsWall"
      component={SocialStatsWall}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialStatsWallDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
