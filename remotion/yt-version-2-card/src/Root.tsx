import { Composition, registerRoot } from 'remotion'
import { YtVersion2Card, ytVersion2CardDefaultProps } from './YtVersion2Card'

export function RemotionRoot() {
  return (
    <Composition
      id="YtVersion2Card"
      component={YtVersion2Card}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytVersion2CardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
