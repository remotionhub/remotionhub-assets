import { Composition, registerRoot } from 'remotion'
import { YtShadcnResults, ytShadcnResultsDefaultProps, SHADCN_RESULTS_DURATION_FRAMES } from './YtShadcnResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnResults"
      component={YtShadcnResults}
      durationInFrames={SHADCN_RESULTS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnResultsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
