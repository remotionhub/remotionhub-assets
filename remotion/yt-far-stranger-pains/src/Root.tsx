import { Composition, registerRoot } from 'remotion'
import { YtFarStrangerPains, ytFarStrangerPainsDefaultProps } from './YtFarStrangerPains'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFarStrangerPains"
      component={YtFarStrangerPains}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFarStrangerPainsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
