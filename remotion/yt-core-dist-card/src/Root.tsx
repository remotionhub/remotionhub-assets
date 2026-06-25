import { Composition, registerRoot } from 'remotion'
import { YtCoreDistCard, ytCoreDistCardDefaultProps, CORE_DIST_CARD_DURATION_FRAMES } from './YtCoreDistCard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreDistCard"
      component={YtCoreDistCard}
      durationInFrames={CORE_DIST_CARD_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreDistCardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
