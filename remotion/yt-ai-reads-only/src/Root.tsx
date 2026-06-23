import { Composition, registerRoot } from 'remotion'
import { YtAiReadsOnly, ytAiReadsOnlyDefaultProps } from './YtAiReadsOnly'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReadsOnly"
      component={YtAiReadsOnly}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReadsOnlyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
