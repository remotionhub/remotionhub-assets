import { Composition, registerRoot } from 'remotion'
import { YtReportTransform, ytReportTransformDefaultProps } from './YtReportTransform'

export function RemotionRoot() {
  return (
    <Composition
      id="YtReportTransform"
      component={YtReportTransform}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytReportTransformDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
