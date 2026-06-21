import { Composition, registerRoot } from 'remotion'
import { CardTypewriter, cardTypewriterDefaultProps } from './CardTypewriter'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTypewriter"
      component={CardTypewriter}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTypewriterDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
