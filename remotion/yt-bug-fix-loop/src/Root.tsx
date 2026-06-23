import { Composition, registerRoot } from 'remotion'
import { YtBugFixLoop, ytBugFixLoopDefaultProps } from './YtBugFixLoop'

export function RemotionRoot() {
  return (
    <Composition
      id="YtBugFixLoop"
      component={YtBugFixLoop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytBugFixLoopDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
