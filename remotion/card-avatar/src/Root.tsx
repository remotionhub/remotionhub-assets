import { Composition, registerRoot } from 'remotion'
import { CardAvatar, cardAvatarDefaultProps } from './CardAvatar'

export function RemotionRoot() {
  return (
    <Composition
      id="CardAvatar"
      component={CardAvatar}
      durationInFrames={120}
      fps={30}
      width={1920}
      height={1080}
      defaultProps={cardAvatarDefaultProps}
    />
  )
}

registerRoot(RemotionRoot)
