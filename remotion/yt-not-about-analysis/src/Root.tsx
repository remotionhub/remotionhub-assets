import { Composition, registerRoot } from 'remotion'
import { YtNotAboutAnalysis, ytNotAboutAnalysisDefaultProps } from './YtNotAboutAnalysis'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotAboutAnalysis"
      component={YtNotAboutAnalysis}
      durationInFrames={180}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotAboutAnalysisDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
