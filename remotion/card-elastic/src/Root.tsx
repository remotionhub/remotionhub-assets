import { Composition, registerRoot } from 'remotion'
import { CardElastic, cardElasticDefaultProps } from './CardElastic'

export function RemotionRoot() {
  return (
    <Composition
      id="CardElastic"
      component={CardElastic}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardElasticDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
