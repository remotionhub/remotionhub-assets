import { Composition, registerRoot } from 'remotion'
import { YtFasterHigherQuality, ytFasterHigherQualityDefaultProps } from './YtFasterHigherQuality'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFasterHigherQuality"
      component={YtFasterHigherQuality}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFasterHigherQualityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
