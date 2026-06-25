import { Composition, registerRoot } from 'remotion'
import { YtAskAiTip, ytAskAiTipDefaultProps, ASK_AI_TIP_DURATION_FRAMES } from './YtAskAiTip'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAskAiTip"
      component={YtAskAiTip}
      durationInFrames={ASK_AI_TIP_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAskAiTipDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
