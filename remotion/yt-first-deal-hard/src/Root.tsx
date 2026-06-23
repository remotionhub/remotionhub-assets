import { Composition, registerRoot } from 'remotion'
import { YtFirstDealHard, ytFirstDealHardDefaultProps } from './YtFirstDealHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstDealHard"
      component={YtFirstDealHard}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstDealHardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
