import { Composition, registerRoot } from 'remotion'
import { YtMobilePatience, ytMobilePatienceDefaultProps } from './YtMobilePatience'

export function RemotionRoot() {
  return (
    <Composition
      id="YtMobilePatience"
      component={YtMobilePatience}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytMobilePatienceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
