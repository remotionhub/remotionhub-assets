import { Composition, registerRoot } from 'remotion'
import { TitleKineticBounce, titleKineticBounceDefaultProps } from './TitleKineticBounce'

export function RemotionRoot() {
  return (
    <Composition
      id="TitleKineticBounce"
      component={TitleKineticBounce}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={titleKineticBounceDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
