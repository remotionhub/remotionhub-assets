import { Composition, registerRoot } from 'remotion'
import { YtNotAboutAnalysis, ytNotAboutAnalysisDefaultProps, NOT_ABOUT_ANALYSIS_DURATION_FRAMES } from './YtNotAboutAnalysis'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNotAboutAnalysis"
      component={YtNotAboutAnalysis}
      durationInFrames={NOT_ABOUT_ANALYSIS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNotAboutAnalysisDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
