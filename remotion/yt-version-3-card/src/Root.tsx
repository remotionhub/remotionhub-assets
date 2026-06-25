import { Composition, registerRoot } from 'remotion'
import { YtVersion3Card, ytVersion3CardDefaultProps , THIRD_VERSION_DURATION_FRAMES } from './YtVersion3Card'

export function RemotionRoot() {
  return (
    <Composition
      id="YtVersion3Card"
      component={YtVersion3Card}
      durationInFrames={THIRD_VERSION_DURATION_FRAMES}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytVersion3CardDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
