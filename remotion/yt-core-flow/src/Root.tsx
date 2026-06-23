import { Composition, registerRoot } from 'remotion'
import { YtCoreFlow, ytCoreFlowDefaultProps } from './YtCoreFlow'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCoreFlow"
      component={YtCoreFlow}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCoreFlowDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
