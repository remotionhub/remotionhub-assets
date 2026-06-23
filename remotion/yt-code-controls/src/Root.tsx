import { Composition, registerRoot } from 'remotion'
import { YtCodeControls, ytCodeControlsDefaultProps } from './YtCodeControls'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCodeControls"
      component={YtCodeControls}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCodeControlsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
