import { Composition, registerRoot } from 'remotion'
import { SocialStoriesRow, socialStoriesRowDefaultProps } from './SocialStoriesRow'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialStoriesRow"
      component={SocialStoriesRow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialStoriesRowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
