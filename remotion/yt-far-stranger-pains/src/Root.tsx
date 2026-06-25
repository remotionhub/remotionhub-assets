import { Composition, registerRoot } from 'remotion'
import { YtFarStrangerPains, ytFarStrangerPainsDefaultProps , FAR_STRANGER_PAINS_DURATION_FRAMES } from './YtFarStrangerPains'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangerPains"
      component={YtFarStrangerPains}
      durationInFrames={FAR_STRANGER_PAINS_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangerPainsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
