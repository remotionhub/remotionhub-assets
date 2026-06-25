import { Composition, registerRoot } from 'remotion'
import { YtCodeControls, ytCodeControlsDefaultProps , CODE_CONTROLS_DURATION_FRAMES } from './YtCodeControls'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCodeControls"
      component={YtCodeControls}
      durationInFrames={CODE_CONTROLS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCodeControlsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
