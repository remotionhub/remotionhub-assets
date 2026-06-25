import { Composition, registerRoot } from 'remotion'
import { YtEasyChannelHardDist, ytEasyChannelHardDistDefaultProps , EASY_CHANNEL_HARD_DIST_DURATION_FRAMES } from './YtEasyChannelHardDist'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEasyChannelHardDist"
      component={YtEasyChannelHardDist}
      durationInFrames={EASY_CHANNEL_HARD_DIST_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEasyChannelHardDistDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
