import { Composition, registerRoot } from 'remotion'
import { YtUserIterate, ytUserIterateDefaultProps , USER_ITERATE_DURATION_FRAMES } from './YtUserIterate'

export function RemotionRoot() {
  return (
    <Composition
      id="YtUserIterate"
      component={YtUserIterate}
      durationInFrames={USER_ITERATE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytUserIterateDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
