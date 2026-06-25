import { Composition, registerRoot } from 'remotion'
import { YtFarToNear, ytFarToNearDefaultProps , FAR_TO_NEAR_DURATION_FRAMES } from './YtFarToNear'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarToNear"
      component={YtFarToNear}
      durationInFrames={FAR_TO_NEAR_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarToNearDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
