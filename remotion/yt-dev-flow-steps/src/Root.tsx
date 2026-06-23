import { Composition, registerRoot } from 'remotion'
import { YtDevFlowSteps, ytDevFlowStepsDefaultProps } from './YtDevFlowSteps'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowSteps"
      component={YtDevFlowSteps}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowStepsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
