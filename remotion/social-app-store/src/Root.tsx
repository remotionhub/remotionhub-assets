import { Composition, registerRoot } from 'remotion'
import { SocialAppStore, socialAppStoreDefaultProps } from './SocialAppStore'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialAppStore"
      component={SocialAppStore}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialAppStoreDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
