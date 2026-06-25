import { Composition, registerRoot } from 'remotion'
import { YtReportTransform, ytReportTransformDefaultProps , REPORT_TRANSFORM_DURATION_FRAMES } from './YtReportTransform'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReportTransform"
      component={YtReportTransform}
      durationInFrames={REPORT_TRANSFORM_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReportTransformDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
