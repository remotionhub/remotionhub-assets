import { Composition, registerRoot } from 'remotion'
import { YtShadcnResults, ytShadcnResultsDefaultProps } from './YtShadcnResults'

export function RemotionRoot() {
  return (
    <Composition
      id="YtShadcnResults"
      component={YtShadcnResults}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytShadcnResultsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
