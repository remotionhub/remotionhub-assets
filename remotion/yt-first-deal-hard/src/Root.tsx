import { Composition, registerRoot } from 'remotion'
import { YtFirstDealHard, ytFirstDealHardDefaultProps , FIRST_DEAL_HARD_DURATION_FRAMES } from './YtFirstDealHard'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFirstDealHard"
      component={YtFirstDealHard}
      durationInFrames={FIRST_DEAL_HARD_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFirstDealHardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
