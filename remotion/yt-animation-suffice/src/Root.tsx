import { Composition, registerRoot } from 'remotion'
import { YtAnimationSuffice, ytAnimationSufficeDefaultProps } from './YtAnimationSuffice'

export function RemotionRoot() {
  return (
    <Composition
      id="YtAnimationSuffice"
      component={YtAnimationSuffice}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytAnimationSufficeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
