import { Composition, registerRoot } from 'remotion'
import { CardSplit, cardSplitDefaultProps } from './CardSplit'

export function RemotionRoot() {
  return (
    <Composition
      id="CardSplit"
      component={CardSplit}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardSplitDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
