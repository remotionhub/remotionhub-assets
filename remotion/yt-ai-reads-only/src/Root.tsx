import { Composition, registerRoot } from 'remotion'
import { YtAiReadsOnly, ytAiReadsOnlyDefaultProps, AI_READS_ONLY_DURATION_FRAMES } from './YtAiReadsOnly'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReadsOnly"
      component={YtAiReadsOnly}
      durationInFrames={AI_READS_ONLY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReadsOnlyDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
