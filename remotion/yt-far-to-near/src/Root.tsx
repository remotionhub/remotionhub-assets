import { Composition, registerRoot } from 'remotion'
import { YtFarToNear, ytFarToNearDefaultProps } from './YtFarToNear'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarToNear"
      component={YtFarToNear}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarToNearDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
