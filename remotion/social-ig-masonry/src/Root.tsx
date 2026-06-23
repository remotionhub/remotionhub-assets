import { Composition, registerRoot } from 'remotion'
import { SocialIgMasonry, socialIgMasonryDefaultProps } from './SocialIgMasonry'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialIgMasonry"
      component={SocialIgMasonry}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialIgMasonryDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
