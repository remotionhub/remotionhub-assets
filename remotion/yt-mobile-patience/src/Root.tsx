import { Composition, registerRoot } from 'remotion'
import { YtMobilePatience, ytMobilePatienceDefaultProps, MOBILE_PATIENCE_DURATION_FRAMES } from './YtMobilePatience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMobilePatience"
      component={YtMobilePatience}
      durationInFrames={MOBILE_PATIENCE_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMobilePatienceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
