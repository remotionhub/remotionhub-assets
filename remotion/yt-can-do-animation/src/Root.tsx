import { Composition, registerRoot } from 'remotion'
import { YtCanDoAnimation, ytCanDoAnimationDefaultProps } from './YtCanDoAnimation'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCanDoAnimation"
      component={YtCanDoAnimation}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCanDoAnimationDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
