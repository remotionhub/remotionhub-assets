import { Composition, registerRoot } from 'remotion'
import { YtLikeSubscribeBell, ytLikeSubscribeBellDefaultProps } from './YtLikeSubscribeBell'

export function RemotionRoot() {
  return (
    <Composition
      id="YtLikeSubscribeBell"
      component={YtLikeSubscribeBell}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytLikeSubscribeBellDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
