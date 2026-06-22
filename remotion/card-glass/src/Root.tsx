import { Composition, registerRoot } from 'remotion'
import { CardGlass, cardGlassDefaultProps } from './CardGlass'

export function RemotionRoot() {
  return (
    <Composition
      id="CardGlass"
      component={CardGlass}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardGlassDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
