import { Composition, registerRoot } from 'remotion'
import { YtNearSelfFriends, ytNearSelfFriendsDefaultProps , NEAR_SELF_FRIENDS_DURATION_FRAMES } from './YtNearSelfFriends'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNearSelfFriends"
      component={YtNearSelfFriends}
      durationInFrames={NEAR_SELF_FRIENDS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNearSelfFriendsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
