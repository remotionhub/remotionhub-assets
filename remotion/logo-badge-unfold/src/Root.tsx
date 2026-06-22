import { Composition, registerRoot } from 'remotion'
import { LogoBadgeUnfold, logoBadgeUnfoldDefaultProps } from './LogoBadgeUnfold'

export function RemotionRoot() {
  return (
    <Composition
      id="LogoBadgeUnfold"
      component={LogoBadgeUnfold}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={logoBadgeUnfoldDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
