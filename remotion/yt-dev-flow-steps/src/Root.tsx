import { Composition, registerRoot } from 'remotion'
import { YtDevFlowSteps, ytDevFlowStepsDefaultProps , DEV_FLOW_STEPS_DURATION_FRAMES } from './YtDevFlowSteps'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowSteps"
      component={YtDevFlowSteps}
      durationInFrames={DEV_FLOW_STEPS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowStepsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
