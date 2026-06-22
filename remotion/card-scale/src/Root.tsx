import { Composition, registerRoot } from 'remotion'
import { CardScale, cardScaleDefaultProps } from './CardScale'

export function RemotionRoot() {
  return (
    <Composition
      id="CardScale"
      component={CardScale}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardScaleDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
