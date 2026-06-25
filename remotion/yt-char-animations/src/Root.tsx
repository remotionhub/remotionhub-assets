import { Composition, registerRoot } from 'remotion'
import { YtCharAnimations, ytCharAnimationsDefaultProps } from './YtCharAnimations'

export function RemotionRoot() {
  return (
    <Composition
      id="YtCharAnimations"
      component={YtCharAnimations}
      durationInFrames={240}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={ytCharAnimationsDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
