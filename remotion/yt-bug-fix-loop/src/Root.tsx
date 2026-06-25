import { Composition, registerRoot } from 'remotion'
import { YtBugFixLoop, ytBugFixLoopDefaultProps , BUG_FIX_LOOP_209_DURATION_FRAMES } from './YtBugFixLoop'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBugFixLoop"
      component={YtBugFixLoop}
      durationInFrames={BUG_FIX_LOOP_209_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBugFixLoopDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
