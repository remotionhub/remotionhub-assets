import { Composition, registerRoot } from 'remotion'
import { YtAiReportDoubt, ytAiReportDoubtDefaultProps } from './YtAiReportDoubt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReportDoubt"
      component={YtAiReportDoubt}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReportDoubtDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
