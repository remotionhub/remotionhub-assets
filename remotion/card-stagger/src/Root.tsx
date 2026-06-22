import { Composition, registerRoot } from 'remotion'
import { CardStagger, cardStaggerDefaultProps } from './CardStagger'

export function RemotionRoot() {
  return (
    <Composition
      id="CardStagger"
      component={CardStagger}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardStaggerDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
