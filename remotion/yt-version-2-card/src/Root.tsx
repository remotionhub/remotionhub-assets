import { Composition, registerRoot } from 'remotion'
import { YtVersion2Card, ytVersion2CardDefaultProps , SECOND_VERSION_DURATION_FRAMES } from './YtVersion2Card'

export function RemotionRoot() {
  return (
    <Composition
      id="YtVersion2Card"
      component={YtVersion2Card}
      durationInFrames={SECOND_VERSION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytVersion2CardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
