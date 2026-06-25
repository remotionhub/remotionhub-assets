import { Composition, registerRoot } from 'remotion'
import { YtCoreFlow, ytCoreFlowDefaultProps , CORE_FLOW_DURATION_FRAMES } from './YtCoreFlow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreFlow"
      component={YtCoreFlow}
      durationInFrames={CORE_FLOW_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreFlowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
