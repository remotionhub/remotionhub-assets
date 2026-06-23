import { Composition, registerRoot } from 'remotion'
import { YtNearSelfFriends, ytNearSelfFriendsDefaultProps } from './YtNearSelfFriends'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNearSelfFriends"
      component={YtNearSelfFriends}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNearSelfFriendsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
