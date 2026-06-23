import { Composition, registerRoot } from 'remotion'
import { YtCoreDistCard, ytCoreDistCardDefaultProps } from './YtCoreDistCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreDistCard"
      component={YtCoreDistCard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreDistCardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
