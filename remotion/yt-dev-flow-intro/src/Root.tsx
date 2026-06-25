import { Composition, registerRoot } from 'remotion'
import { YtDevFlowIntro, ytDevFlowIntroDefaultProps , DEV_FLOW_INTRO_206_DURATION_FRAMES } from './YtDevFlowIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowIntro"
      component={YtDevFlowIntro}
      durationInFrames={DEV_FLOW_INTRO_206_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
