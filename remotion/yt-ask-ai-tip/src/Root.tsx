import { Composition, registerRoot } from 'remotion'
import { YtAskAiTip, ytAskAiTipDefaultProps } from './YtAskAiTip'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAskAiTip"
      component={YtAskAiTip}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAskAiTipDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
