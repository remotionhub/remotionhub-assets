import { Composition, registerRoot } from 'remotion'
import { YtEasyChannelHardDist, ytEasyChannelHardDistDefaultProps } from './YtEasyChannelHardDist'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEasyChannelHardDist"
      component={YtEasyChannelHardDist}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEasyChannelHardDistDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
