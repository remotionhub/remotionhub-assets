import { Composition, registerRoot } from 'remotion'
import { CardTwoTone, cardTwoToneDefaultProps } from './CardTwoTone'

export function RemotionRoot() {
  return (
    <Composition
      id="CardTwoTone"
      component={CardTwoTone}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardTwoToneDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
