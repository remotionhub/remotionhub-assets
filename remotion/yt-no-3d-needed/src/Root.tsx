import { Composition, registerRoot } from 'remotion'
import { YtNo3dNeeded, ytNo3dNeededDefaultProps, NO_3D_NEEDED_DURATION_FRAMES } from './YtNo3dNeeded'

export function RemotionRoot() {
  return (
    <Composition
      id="YtNo3dNeeded"
      component={YtNo3dNeeded}
      durationInFrames={NO_3D_NEEDED_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytNo3dNeededDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
