import { Composition, registerRoot } from 'remotion'
import { YtDevFlowIntro, ytDevFlowIntroDefaultProps } from './YtDevFlowIntro'

export function RemotionRoot() {
  return (
    <Composition
      id="YtDevFlowIntro"
      component={YtDevFlowIntro}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytDevFlowIntroDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
