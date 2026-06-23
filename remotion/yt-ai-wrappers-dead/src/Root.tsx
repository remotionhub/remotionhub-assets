import { Composition, registerRoot } from 'remotion'
import { YtAiWrappersDead, ytAiWrappersDeadDefaultProps } from './YtAiWrappersDead'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiWrappersDead"
      component={YtAiWrappersDead}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiWrappersDeadDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
