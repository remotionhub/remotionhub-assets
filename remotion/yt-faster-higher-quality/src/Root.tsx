import { Composition, registerRoot } from 'remotion'
import { YtFasterHigherQuality, ytFasterHigherQualityDefaultProps , FASTER_HIGHER_QUALITY_DURATION_FRAMES } from './YtFasterHigherQuality'

export function RemotionRoot() {
  return (
    <Composition
      id="YtFasterHigherQuality"
      component={YtFasterHigherQuality}
      durationInFrames={FASTER_HIGHER_QUALITY_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytFasterHigherQualityDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
