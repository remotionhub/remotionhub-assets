import { Composition, registerRoot } from 'remotion'
import { YtAiWrappersDead, ytAiWrappersDeadDefaultProps, AI_WRAPPERS_DEAD_DURATION_FRAMES } from './YtAiWrappersDead'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiWrappersDead"
      component={YtAiWrappersDead}
      durationInFrames={AI_WRAPPERS_DEAD_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiWrappersDeadDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
