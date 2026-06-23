import { Composition, registerRoot } from 'remotion'
import { SocialNotifications, socialNotificationsDefaultProps } from './SocialNotifications'

export function RemotionRoot() {
  return (
    <Composition
      id="SocialNotifications"
      component={SocialNotifications}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={socialNotificationsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
