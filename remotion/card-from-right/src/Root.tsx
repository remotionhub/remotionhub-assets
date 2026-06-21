import { Composition, registerRoot } from 'remotion'
import { CardFromRight, cardFromRightDefaultProps } from './CardFromRight'

export function RemotionRoot() {
  return (
    <Composition
      id="CardFromRight"
      component={CardFromRight}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardFromRightDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
