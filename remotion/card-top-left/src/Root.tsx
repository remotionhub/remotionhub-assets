import { Composition, registerRoot } from 'remotion'
import { CardTopLeft, cardTopLeftDefaultProps } from './CardTopLeft'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTopLeft"
      component={CardTopLeft}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTopLeftDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
