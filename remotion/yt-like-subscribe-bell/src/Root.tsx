import { Composition, registerRoot } from 'remotion'
import { YtLikeSubscribeBell, ytLikeSubscribeBellDefaultProps , LIKE_SUBSCRIBE_BELL_DURATION_FRAMES } from './YtLikeSubscribeBell'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLikeSubscribeBell"
      component={YtLikeSubscribeBell}
      durationInFrames={LIKE_SUBSCRIBE_BELL_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLikeSubscribeBellDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
