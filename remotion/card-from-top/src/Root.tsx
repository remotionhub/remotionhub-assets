import { Composition, registerRoot } from 'remotion'
import { CardFromTop, cardFromTopDefaultProps } from './CardFromTop'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromTop"
      component={CardFromTop}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromTopDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
