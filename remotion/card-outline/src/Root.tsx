import { Composition, registerRoot } from 'remotion'
import { CardOutline, cardOutlineDefaultProps } from './CardOutline'

export function RemotionRoot() {
  return (
    <Composition
      id="CardOutline"
      component={CardOutline}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardOutlineDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
