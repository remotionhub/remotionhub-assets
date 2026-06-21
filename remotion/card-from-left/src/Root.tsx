import { Composition, registerRoot } from 'remotion'
import { CardFromLeft, cardFromLeftDefaultProps } from './CardFromLeft'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromLeft"
      component={CardFromLeft}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromLeftDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
