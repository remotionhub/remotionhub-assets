import { Composition, registerRoot } from 'remotion'
import { CardWipe, cardWipeDefaultProps } from './CardWipe'

export function RemotionRoot() {
  return (
    <Composition
      id="CardWipe"
      component={CardWipe}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardWipeDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
