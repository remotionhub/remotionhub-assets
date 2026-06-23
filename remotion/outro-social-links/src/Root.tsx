import { Composition, registerRoot } from 'remotion'
import { OutroSocialLinks, outroSocialLinksDefaultProps } from './OutroSocialLinks'

export function RemotionRoot() {
  return (
    <Composition
      id="OutroSocialLinks"
      component={OutroSocialLinks}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={outroSocialLinksDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
