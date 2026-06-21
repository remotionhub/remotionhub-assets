import { Composition, registerRoot } from 'remotion'
import { CardTopRight, cardTopRightDefaultProps } from './CardTopRight'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTopRight"
      component={CardTopRight}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTopRightDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
