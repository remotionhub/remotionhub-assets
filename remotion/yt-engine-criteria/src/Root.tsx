import { Composition, registerRoot } from 'remotion'
import { YtEngineCriteria, ytEngineCriteriaDefaultProps, ENGINE_CRITERIA_DURATION_FRAMES } from './YtEngineCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineCriteria"
      component={YtEngineCriteria}
      durationInFrames={ENGINE_CRITERIA_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineCriteriaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
