import { Composition, registerRoot } from 'remotion'
import { YtAiReportDoubt, ytAiReportDoubtDefaultProps, AI_REPORT_DOUBT_DURATION_FRAMES } from './YtAiReportDoubt'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAiReportDoubt"
      component={YtAiReportDoubt}
      durationInFrames={AI_REPORT_DOUBT_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAiReportDoubtDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
