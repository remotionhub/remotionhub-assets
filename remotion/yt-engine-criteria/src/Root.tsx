import { Composition, registerRoot } from 'remotion'
import { YtEngineCriteria, ytEngineCriteriaDefaultProps } from './YtEngineCriteria'

export function RemotionRoot() {
  return (
    <Composition
      id="YtEngineCriteria"
      component={YtEngineCriteria}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytEngineCriteriaDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
